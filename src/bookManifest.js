export const bookTree = [
  {
    title: "前言",
    path: "00-前言.md"
  },
  {
    title: "第一部分 基础篇",
    children: [
      { title: "01 智能体编程的新范式", path: "第一部分-基础篇/01-智能体编程的新范式.md" },
      { title: "02 对话循环 Agent的心跳", path: "第一部分-基础篇/02-对话循环-Agent的心跳.md" },
      { title: "03 工具系统 Agent的双手", path: "第一部分-基础篇/03-工具系统-Agent的双手.md" },
      { title: "04 权限管线 Agent的护栏", path: "第一部分-基础篇/04-权限管线-Agent的护栏.md" }
    ]
  },
  {
    title: "第二部分 核心系统篇",
    children: [
      { title: "05 设置与配置 Agent的基因", path: "第二部分-核心系统篇/05-设置与配置-Agent的基因.md" },
      { title: "06 记忆系统 Agent的长期记忆", path: "第二部分-核心系统篇/06-记忆系统-Agent的长期记忆.md" },
      { title: "07 上下文管理 Agent的工作记忆", path: "第二部分-核心系统篇/07-上下文管理-Agent的工作记忆.md" },
      { title: "08 钩子系统 Agent的生命周期扩展点", path: "第二部分-核心系统篇/08-钩子系统-Agent的生命周期扩展点.md" }
    ]
  },
  {
    title: "第三部分 高级模式篇",
    children: [
      { title: "09 子智能体与 Fork 模式", path: "第三部分-高级模式篇/09-子智能体与Fork模式.md" },
      { title: "10 协调器模式 多智能体编排", path: "第三部分-高级模式篇/10-协调器模式-多智能体编排.md" },
      { title: "11 技能系统与插件架构", path: "第三部分-高级模式篇/11-技能系统与插件架构.md" },
      { title: "12 MCP 集成与外部协议", path: "第三部分-高级模式篇/12-MCP集成与外部协议.md" }
    ]
  },
  {
    title: "第四部分 工程实践篇",
    children: [
      { title: "13 流式架构与性能优化", path: "第四部分-工程实践篇/13-流式架构与性能优化.md" },
      { title: "14 Plan 模式与结构化工作流", path: "第四部分-工程实践篇/14-Plan模式与结构化工作流.md" },
      { title: "15 构建你自己的 Agent Harness", path: "第四部分-工程实践篇/15-构建你自己的Agent-Harness.md" }
    ]
  },
  {
    title: "附录",
    children: [
      { title: "A 源码导航地图", path: "附录/A-源码导航地图.md" },
      { title: "B 工具完整清单", path: "附录/B-工具完整清单.md" },
      { title: "C 功能标志速查表", path: "附录/C-功能标志速查表.md" },
      { title: "D 术语表", path: "附录/D-术语表.md" }
    ]
  }
];

export function flattenBook(tree = bookTree) {
  const result = [];

  function visit(node) {
    if (node.path) {
      result.push({ title: node.title, path: node.path });
      return;
    }

    for (const child of node.children || []) {
      visit(child);
    }
  }

  for (const item of tree) {
    visit(item);
  }

  return result;
}

export function findNodeByPath(path, tree = bookTree) {
  for (const node of tree) {
    if (node.path === path) {
      return node;
    }
    if (node.children) {
      const hit = findNodeByPath(path, node.children);
      if (hit) {
        return hit;
      }
    }
  }
  return null;
}
