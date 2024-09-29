import {
  Section,
  SectionTitle,
  Table,
  TableRow,
  TableHeader,
  TableData,
  List,
  ListItem,
} from "./BusinessContentSection.styled";

const BusinessContentSection = () => {
  return (
    <Section>
      <SectionTitle>主な事業内容</SectionTitle>
      <Table>
        <TableRow>
          <TableHeader>1</TableHeader>
          <TableData>
            次の資材の仕入及び販売
            <List>
              <ListItem>（1）鉄鋼、非金属及びそれらの製品</ListItem>
              <ListItem>
                （2）セメント、生コン、コンクリート製品、骨材及びそれらの関連製品
              </ListItem>
              <ListItem>
                （3）鉄鋼二次製品、配管他機械、器具、工具、 電動機及び雑貨
              </ListItem>
              <ListItem>
                （4）橋梁・河川・港湾用材、 造園材及び公園施設
              </ListItem>
              <ListItem>（5）道路用材、上下水道用材、一般土木用材</ListItem>
              <ListItem>
                （6）防水材、屋根材、 左官材、仕上げ塗材、建具及び金具、床材、
                合板、内外装材
              </ListItem>
              <ListItem>（7）ガラス、室内装飾材、 車庫、外構用材</ListItem>
              <ListItem>（8）保温・保冷材、ボイラー、 空調機器ポンプ</ListItem>
              <ListItem>（9）排水金具、衛生器材、浴槽</ListItem>
              <ListItem>
                （10）防災・体育関連資材、医療・福祉用機材(AED)
                <br />
                高度管理医療機器等販売業･貸与業…大保第65号
              </ListItem>
              <ListItem>
                （11）工業薬品（毒物、劇物、アルコール他）
                <br />
                毒物劇物一般販売業…大保般129号、他12件
                <br />
                化学製品及びそれらの原料
              </ListItem>
              <ListItem>
                （12）農畜産及び水産資材及びそれらの原料
                <br />
                農薬販売、病防第6-125号、他11件
              </ListItem>
              <ListItem>
                （13）肥料及びそれらの原料
                <br />
                肥料販売業、岩手県知事農普533号
              </ListItem>
              <ListItem>（14）スチール家具及びOA 機器</ListItem>
              <ListItem>（15） プレハブ及び仮設ハウス</ListItem>
            </List>
          </TableData>
        </TableRow>
        <TableRow>
          <TableHeader>2</TableHeader>
          <TableData>仮設材の賃貸借及び工事請負</TableData>
        </TableRow>
        <TableRow>
          <TableHeader>3</TableHeader>
          <TableData>外構、内装、屋根他工事請負</TableData>
        </TableRow>
        <TableRow>
          <TableHeader>4</TableHeader>
          <TableData>各種製作物件及び据付工事請負</TableData>
        </TableRow>
        <TableRow>
          <TableHeader>5</TableHeader>
          <TableData>
            土木、一般建築工事請負
            <br />
            建設業（土木、建築）岩手県知事（般-2）-2397号
          </TableData>
        </TableRow>
        <TableRow>
          <TableHeader>6</TableHeader>
          <TableData>ガラス加工、サッシ組立据付工事及び請負</TableData>
        </TableRow>
        <TableRow>
          <TableHeader>7</TableHeader>
          <TableData>
            産業廃棄物処収集運搬業
            <List>
              <ListItem>岩手県知事許可番号　00315012304</ListItem>
              <ListItem>秋田県知事許可番号　00519012304</ListItem>
              <ListItem>宮城県知事許可番号　00400012304</ListItem>
              <ListItem>青森県知事許可番号　00211012304</ListItem>
            </List>
          </TableData>
        </TableRow>
        <TableRow>
          <TableHeader>8</TableHeader>
          <TableData>
            特別管理産業廃棄物収集運搬業
            <List>
              <ListItem>岩手県知事許可番号　00365012304</ListItem>
              <ListItem>秋田県知事許可番号　00566012304</ListItem>
              <ListItem>宮城県知事許可番号　00450012304</ListItem>
              <ListItem>青森県知事許可番号　00261012304</ListItem>
            </List>
          </TableData>
        </TableRow>
        <TableRow>
          <TableHeader>9</TableHeader>
          <TableData>前項に付帯又は関連する一切の事業</TableData>
        </TableRow>
      </Table>
    </Section>
  );
};

export default BusinessContentSection;
