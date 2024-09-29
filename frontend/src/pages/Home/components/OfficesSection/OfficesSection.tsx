import { createSignal, createMemo, For, Show } from "solid-js";
import Container from "../../../../components/Container/Container";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import {
  OfficesContainer,
  OfficesContent,
  OfficesMapAndDetails,
  OfficesList,
  OfficeItem,
  TabContainer,
  TabButton,
  OfficeDetailsGrid,
  OfficeImageWrapper,
  OfficeImage,
  OfficeInfoAndMapWrapper,
  OfficeInfo,
  OfficeName,
  OfficeAddress,
  OfficePhone,
  OfficeFax,
  OfficeMapWrapper,
  Pagination,
  PageButton,
  OfficesListContainer,
  OfficesListContent,
  OfficePostalCode,
  OfficeInfoItem,
  OfficeInfoIcon,
  OfficeInfoContent,
  OfficeInfoLabel,
  OfficeInfoLink,
} from "./OfficesSection.styled";
import { Office } from "../../../../types/offices";
import { offices, prefectures } from "../../../../data/officesData";

function OfficesSection() {
  const [selectedOffice, setSelectedOffice] = createSignal<Office>(offices[0]);
  const [selectedPrefecture, setSelectedPrefecture] = createSignal<string>(
    prefectures[0]
  );
  const [currentPage, setCurrentPage] = createSignal(1);
  const itemsPerPage = 10; // 1ページあたりの表示アイテム数を10に変更

  const filteredOffices = createMemo(() =>
    offices.filter((office) => office.prefecture === selectedPrefecture())
  );

  const totalPages = createMemo(() =>
    Math.ceil(filteredOffices().length / itemsPerPage)
  );

  const currentOffices = createMemo(() => {
    const startIndex = (currentPage() - 1) * itemsPerPage;
    return filteredOffices().slice(startIndex, startIndex + itemsPerPage);
  });

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <OfficesContainer>
      <Container>
        <SectionTitle
          id="offices-title"
          title="営業所・関連企業"
          description="全国各地に展開する営業所と関連企業をご紹介します。"
        />
        <OfficesContent>
          <OfficesMapAndDetails>
            <OfficeDetailsGrid>
              <OfficeImageWrapper>
                <Show
                  when={selectedOffice().imageUrl}
                  fallback={<p>画像は現在利用できません。</p>}
                >
                  <OfficeImage
                    src={selectedOffice().imageUrl}
                    alt={`${selectedOffice().name}の画像`}
                  />
                </Show>
              </OfficeImageWrapper>
              <OfficeInfoAndMapWrapper>
                <OfficeMapWrapper>
                  <iframe
                    width="100%"
                    height="100%"
                    style="border:0"
                    src={selectedOffice().mapUrl}
                    allowfullscreen
                  ></iframe>
                </OfficeMapWrapper>
                <OfficeInfo>
                  <OfficeName>{selectedOffice().name}</OfficeName>
                  <OfficeInfoItem>
                    <OfficeInfoIcon>📍</OfficeInfoIcon>
                    <OfficeInfoContent>
                      <OfficeInfoLabel>住所：</OfficeInfoLabel>
                      <OfficePostalCode>
                        〒{selectedOffice().postalCode}
                      </OfficePostalCode>
                      <OfficeInfoLink
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                          selectedOffice().address
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <OfficeAddress>
                          {selectedOffice().address}
                        </OfficeAddress>
                      </OfficeInfoLink>
                    </OfficeInfoContent>
                  </OfficeInfoItem>
                  <OfficeInfoItem>
                    <OfficeInfoIcon>📞</OfficeInfoIcon>
                    <OfficeInfoContent>
                      <OfficeInfoLabel>電話番号：</OfficeInfoLabel>
                      <OfficeInfoLink href={`tel:${selectedOffice().phone}`}>
                        <OfficePhone>{selectedOffice().phone}</OfficePhone>
                      </OfficeInfoLink>
                    </OfficeInfoContent>
                  </OfficeInfoItem>
                  <OfficeInfoItem>
                    <OfficeInfoIcon>📠</OfficeInfoIcon>
                    <OfficeInfoContent>
                      <OfficeInfoLabel>FAX：</OfficeInfoLabel>
                      <OfficeFax>{selectedOffice().fax}</OfficeFax>
                    </OfficeInfoContent>
                  </OfficeInfoItem>
                </OfficeInfo>
              </OfficeInfoAndMapWrapper>
            </OfficeDetailsGrid>
          </OfficesMapAndDetails>
          <OfficesListContainer>
            <OfficesListContent>
              <TabContainer>
                <For each={prefectures}>
                  {(prefecture) => (
                    <TabButton
                      onClick={() => {
                        setSelectedPrefecture(prefecture);
                        setCurrentPage(1);
                      }}
                      selected={prefecture === selectedPrefecture()}
                    >
                      {prefecture}
                    </TabButton>
                  )}
                </For>
              </TabContainer>
              <OfficesList>
                <For each={currentOffices()}>
                  {(office) => (
                    <OfficeItem
                      onClick={() => setSelectedOffice(office)}
                      selected={office.name === selectedOffice().name}
                    >
                      <h3>{office.name}</h3>
                    </OfficeItem>
                  )}
                </For>
              </OfficesList>
            </OfficesListContent>
            <Show when={totalPages() > 1}>
              <Pagination>
                <For
                  each={Array.from({ length: totalPages() }, (_, i) => i + 1)}
                >
                  {(page) => (
                    <PageButton
                      onClick={() => handlePageChange(page)}
                      active={page === currentPage()}
                    >
                      {page}
                    </PageButton>
                  )}
                </For>
              </Pagination>
            </Show>
          </OfficesListContainer>
        </OfficesContent>
      </Container>
    </OfficesContainer>
  );
}

export default OfficesSection;
