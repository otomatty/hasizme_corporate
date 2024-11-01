import {
  Section,
  SectionTitle,
  Table,
  TableRow,
  TableHeader,
  TableData,
} from "./CompanyOverviewSection.styled";

const CompanyOverviewSection = () => {
  return (
    <Section>
      <SectionTitle>会社概要</SectionTitle>
      <Table>
        <TableRow>
          <TableHeader>社名</TableHeader>
          <TableData>橋爪商事株式会社</TableData>
        </TableRow>
        <TableRow>
          <TableHeader>創業</TableHeader>
          <TableData>昭和3年</TableData>
        </TableRow>
        <TableRow>
          <TableHeader>設立</TableHeader>
          <TableData>昭和26年5月1日</TableData>
        </TableRow>
        <TableRow>
          <TableHeader>資本金</TableHeader>
          <TableData>2億5,120万円（5,024千株）</TableData>
        </TableRow>
        <TableRow>
          <TableHeader>売上高</TableHeader>
          <TableData>282億円（令和5年度）</TableData>
        </TableRow>
        <TableRow>
          <TableHeader>従業員数</TableHeader>
          <TableData>男126名　女37名　計163名（役員除く）</TableData>
        </TableRow>
        <TableRow>
          <TableHeader>主要取引銀行</TableHeader>
          <TableData>
            <ul>
              <li>岩手銀行大船渡支店</li>
              <li>商工中金盛岡支店</li>
              <li>北日本銀行大船渡支店</li>
              <li>東北銀行大船渡支店</li>
            </ul>
          </TableData>
        </TableRow>
      </Table>
    </Section>
  );
};

export default CompanyOverviewSection;
