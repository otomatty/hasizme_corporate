import { createSignal, For } from "solid-js";
import {
  StyledOrgChart,
  StyledNode,
  StyledChildren,
  ToggleButton,
} from "./OrganizationChart.styled";

interface OrgNode {
  name: string;
  title: string;
  children?: OrgNode[];
  link?: string;
}

const OrganizationChart = () => {
  const [expandedNodes, setExpandedNodes] = createSignal<Set<string>>(
    new Set()
  );

  const toggleNode = (name: string) => {
    setExpandedNodes((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(name)) {
        newSet.delete(name);
      } else {
        newSet.add(name);
      }
      return newSet;
    });
  };

  const renderNode = (node: OrgNode) => {
    const isExpanded = expandedNodes().has(node.name);
    const hasChildren = node.children && node.children.length > 0;

    return (
      <StyledNode>
        <div>
          {hasChildren && (
            <ToggleButton onClick={() => toggleNode(node.name)}>
              {isExpanded ? "-" : "+"}
            </ToggleButton>
          )}
          {node.link ? (
            <a href={node.link} target="_blank" rel="noopener noreferrer">
              {node.name} - {node.title}
            </a>
          ) : (
            <span>
              {node.name} - {node.title}
            </span>
          )}
        </div>
        {hasChildren && isExpanded && (
          <StyledChildren>
            <For each={node.children}>{(child) => renderNode(child)}</For>
          </StyledChildren>
        )}
      </StyledNode>
    );
  };

  const orgData: OrgNode = {
    name: "CEO",
    title: "Chief Executive Officer",
    children: [
      {
        name: "CTO",
        title: "Chief Technology Officer",
        children: [
          { name: "Dev Manager", title: "Development Manager" },
          { name: "QA Manager", title: "Quality Assurance Manager" },
        ],
      },
      {
        name: "CFO",
        title: "Chief Financial Officer",
        link: "https://example.com/cfo",
      },
      {
        name: "COO",
        title: "Chief Operating Officer",
      },
    ],
  };

  return <StyledOrgChart>{renderNode(orgData)}</StyledOrgChart>;
};

export default OrganizationChart;
