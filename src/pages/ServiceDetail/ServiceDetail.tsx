import { Component, createSignal, createEffect, Show } from 'solid-js';
import { useParams, A } from '@solidjs/router';
import { services, ServiceData } from '../../data/servicesData';
import {
  ServiceDetailContainer,
  HeroContainer,
  HeroImage,
  HeroFilter,
  HeroTitle,
  ServiceContent,
  MainContent,
  Sidebar,
  SectionTitle,
  ProductList,
  ProductItem,
  FeatureList,
  FeatureItem,
  ContactInfo,
  BlogLink,
  OtherServicesList,
  OtherServicesItem,
} from './ServiceDetail.styled';

const ServiceDetail: Component = () => {
  const params = useParams();
  const [service, setService] = createSignal<ServiceData | undefined>(
    undefined
  );

  createEffect(() => {
    const foundService = services.find((s) => s.id === params.id);
    setService(foundService);
  });

  return (
    <>
      <Show
        when={service()}
        fallback={
          <ServiceDetailContainer>
            <p>事業が見つかりません。</p>
          </ServiceDetailContainer>
        }
      >
        {(s) => (
          <>
            <HeroContainer hasImage={!!s().imageUrl}>
              {s().imageUrl && (
                <>
                  <HeroFilter />
                </>
              )}
              <HeroTitle>{s().title}</HeroTitle>
            </HeroContainer>
            <ServiceDetailContainer>
              <ServiceContent>
                <MainContent>
                  <p>{s().description}</p>

                  <SectionTitle>取扱商品</SectionTitle>
                  <ProductList>
                    {s().products.map((product) => (
                      <ProductItem>{product}</ProductItem>
                    ))}
                  </ProductList>

                  <SectionTitle>特徴</SectionTitle>
                  <FeatureList>
                    {s().features.map((feature) => (
                      <FeatureItem>{feature}</FeatureItem>
                    ))}
                  </FeatureList>
                </MainContent>
                <Sidebar>
                  <SectionTitle>お問い合わせ</SectionTitle>
                  <ContactInfo>Email: {s().contact}</ContactInfo>

                  <SectionTitle>ブログ</SectionTitle>
                  <BlogLink href={s().blogUrl}>事業部ブログを見る</BlogLink>
                </Sidebar>
              </ServiceContent>

              <SectionTitle>他の事業</SectionTitle>
              <OtherServicesList>
                {services
                  .filter((otherService) => otherService.id !== s().id)
                  .map((otherService) => (
                    <OtherServicesItem>
                      <A href={`/services/${otherService.id}`}>
                        {otherService.title}
                      </A>
                    </OtherServicesItem>
                  ))}
              </OtherServicesList>
            </ServiceDetailContainer>
          </>
        )}
      </Show>
    </>
  );
};

export default ServiceDetail;
