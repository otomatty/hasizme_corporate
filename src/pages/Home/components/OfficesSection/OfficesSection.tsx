import { createSignal, For, Show } from 'solid-js';
import Container from '../../../../components/Container/Container';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import {
  OfficesContainer,
  OfficesContent,
  OfficesMapAndDetails,
  OfficesList,
  OfficeItem,
  TabContainer,
  TabButton,
  OfficeDetails,
} from './OfficesSection.styled';
import { Office } from '../../../../types/offices';
import { offices, prefectures } from '../../../../data/officesData';

function OfficesSection() {
  const [selectedOffice, setSelectedOffice] = createSignal<Office>(offices[0]);
  const [selectedPrefecture, setSelectedPrefecture] = createSignal<string>(
    prefectures[0]
  );

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
            <Show
              when={selectedOffice().imageUrl}
              fallback={<p>画像は現在利用できません。</p>}
            >
              <img
                src={selectedOffice().imageUrl}
                alt={`${selectedOffice().name}の画像`}
              />
            </Show>
            <OfficeDetails>
              <h3>{selectedOffice().name}</h3>
              <p>住所: {selectedOffice().address}</p>
              <p>TEL: {selectedOffice().phone}</p>
              <p>FAX: {selectedOffice().fax}</p>
            </OfficeDetails>
          </OfficesMapAndDetails>
          <div>
            <TabContainer>
              <For each={prefectures}>
                {(prefecture) => (
                  <TabButton
                    onClick={() => setSelectedPrefecture(prefecture)}
                    selected={prefecture === selectedPrefecture()}
                  >
                    {prefecture}
                  </TabButton>
                )}
              </For>
            </TabContainer>
            <OfficesList>
              <For
                each={offices.filter(
                  (office) => office.prefecture === selectedPrefecture()
                )}
              >
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
          </div>
        </OfficesContent>
      </Container>
    </OfficesContainer>
  );
}

export default OfficesSection;
