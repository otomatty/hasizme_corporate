import { styled } from 'solid-styled-components';

export const ServicesContainer = styled('section')`
  display: flex;
  background-color: #f9f9f9;
  width: 100%;
  position: relative;

  @media (min-width: 1024px) {
    height: 600vh;
  }
`;

export const ServicesContentWrapper = styled('div')`
  width: 100%;
  display: flex;
  /* 高さは動的に設定されるため、ここでは設定しない */
`;

export const ServicesWrapper = styled('div')`
  width: 100%;
  position: sticky;
  top: 0; /* 固定位置を調整 */
  height: 100vh; /* 高さを100vhに設定 */
  box-sizing: border-box;
  padding: 2rem 0;
  box-sizing: border-box;
  overflow-y: hidden; /* 内部スクロールを隠す */
  transition: padding-top 0.3s ease; /* アニメーションを追加 */
`;

export const ServicesList = styled('div')`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  width: 100%;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 300px;
    height: 100%;
    padding: 1rem;
    box-sizing: border-box;
  }
`;

export const ServicesTitle = styled('h2')`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
  color: #333;
`;

export const ServiceCard = styled('div')<{ selected: boolean }>`
  background-color: #fff;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  box-shadow: ${({ selected }) =>
    selected
      ? '0 8px 16px rgba(0, 0, 0, 0.2)'
      : '0 4px 8px rgba(0, 0, 0, 0.1)'};
  padding: 1rem;
  transform: none; /* 768px以上の画面サイズではtransformを適用しない */
  transition: transform 0.3s, box-shadow 0.3s, padding 0.3s;
  cursor: pointer;

  @media (min-width: 768px) {
    height: calc(100% / 6);
    flex-direction: row;
    align-items: center;
    gap: 0;
    transform: ${({ selected }) => (selected ? 'scale(1.05)' : 'scale(1)')};
    &:hover {
      transform: scale(1.05);
      box-shadow: 0 8px 8px rgba(0, 0, 0, 0.2);
      padding: 1.5rem;
    }
  }
`;

export const ServiceIcon = styled('div')`
  font-size: 2rem;
  margin-right: 0.5rem;
`;

export const ServiceTitle = styled('h3')`
  font-size: 1.25rem;
  color: #444;
  margin: 0;
`;

export const SliderContainer = styled('div')`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const Slide = styled('div')`
  position: absolute;
  width: 100%;
  height: 100%;
  transition: transform 0.5s ease-in-out;
  transform: translateY(100%); /* 初期状態は下に隠す */
  &.active {
    transform: translateY(0); /* アクティブなスライドは表示 */
  }
  &.inactive {
    transform: translateY(-100%); /* 非アクティブなスライドは上に隠す */
  }
`;

export const ServiceDescriptionContainer = styled('div')`
  margin-left: 1rem;
  flex: 1;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  position: relative;
  overflow: hidden;
  width: calc(100% - 300px - 2rem);
  display: flex; /* インジケーターを横に配置するために追加 */
`;

export const ServiceDescriptionTitle = styled('h3')`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #444;
`;

export const ServiceDescriptionText = styled('p')`
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
`;

export const DescriptionWrapper = styled('div')`
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 1rem;
  box-sizing: border-box;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: transform 0.5s;
  background-color: #f0f0f0;
`;

export const IndicatorContainer = styled('div')`
  display: none; /* 1024px未満の画面サイズで非表示 */

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
    margin-left: 1rem; /* ServiceDescriptionContainerの横に配置 */
  }
`;

export const IndicatorDot = styled('div')<{ active: boolean }>`
  width: 10px;
  height: 10px;
  background-color: ${({ active }) => (active ? '#444' : '#e0e0e0')};
  border-radius: 50%;
  transition: background-color 0.3s;
`;

export const ModalOverlay = styled('div')<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

export const ModalContent = styled('div')`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 1rem;
  box-sizing: border-box;
  border-radius: 8px;
  width: 90%;
  height: 90%;
  overflow-y: auto;
  z-index: 1001;
`;
