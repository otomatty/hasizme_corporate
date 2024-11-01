import {
  Section,
  SectionTitle,
  Table,
  TableRow,
  TableHeader,
  TableData,
} from "./ExecutivesSection.styled";

const ExecutivesSection = () => {
  return (
    <Section>
      <SectionTitle>役員一覧</SectionTitle>
      <Table>
        <TableRow>
          <TableHeader>
            代表取締役社長
            <br />
            （兼橋爪信栄(株) 社長）
          </TableHeader>
          <TableData>橋爪　博志</TableData>
        </TableRow>
        <TableRow>
          <TableHeader>取締役会長</TableHeader>
          <TableData>宮澤　信平</TableData>
        </TableRow>
        <TableRow>
          <TableHeader>
            取締役専務執行役員
            <br />
            （兼大船渡レミコン(株) 社長、
            <br />
            兼高田レミコン(株) 社長、
            <br />
            兼(株)丸協 社長）
          </TableHeader>
          <TableData>長谷川　秀信</TableData>
        </TableRow>
        <TableRow>
          <TableHeader>取締役相談役</TableHeader>
          <TableData>橋爪　幸平</TableData>
        </TableRow>
        <TableRow>
          <TableHeader>常務執行役員</TableHeader>
          <TableData>志田　幸雄</TableData>
        </TableRow>
        <TableRow>
          <TableHeader>常務執行役員盛岡支店長</TableHeader>
          <TableData>石川　修一</TableData>
        </TableRow>
        <TableRow>
          <TableHeader>常務執行役員一関支店長</TableHeader>
          <TableData>磯谷　正幸</TableData>
        </TableRow>
        <TableRow>
          <TableHeader>執行役員新商材室長</TableHeader>
          <TableData>平　洋規</TableData>
        </TableRow>
        <TableRow>
          <TableHeader>執行役員新規エリア開拓部長北陸出張所所長</TableHeader>
          <TableData>水野　孝志</TableData>
        </TableRow>
        <TableRow>
          <TableHeader>執行役員セメント部長</TableHeader>
          <TableData>水野　宏史</TableData>
        </TableRow>
        <TableRow>
          <TableHeader>執行役員営業部長</TableHeader>
          <TableData>新沼　敬</TableData>
        </TableRow>
        <TableRow>
          <TableHeader>監査役</TableHeader>
          <TableData>田村　文利</TableData>
        </TableRow>
        <TableRow>
          <TableHeader>非常勤監査役</TableHeader>
          <TableData>山内　睦也</TableData>
        </TableRow>
        <TableRow>
          <TableHeader>顧問</TableHeader>
          <TableData>水野　幸男</TableData>
        </TableRow>
      </Table>
    </Section>
  );
};

export default ExecutivesSection;
