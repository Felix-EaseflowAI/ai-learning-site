export type DailyKnowledge = {
  title: string;
  summary: string;
  insight: string;
  tags: string[];
};

export const dailyKnowledgePool: DailyKnowledge[] = [
  {
    title: "注意力机制（Attention）",
    summary:
      "Attention 让模型在处理序列时，动态地为不同位置分配权重，从而捕捉长距离依赖关系。",
    insight:
      "Transformer 的核心不是「更深层」，而是「全局关联」——每个 token 都能直接看到其它 token。",
    tags: ["深度学习", "Transformer"],
  },
  {
    title: "温度参数（Temperature）",
    summary:
      "在采样生成文本时，Temperature 控制概率分布的平滑程度：越低越确定，越高越随机。",
    insight:
      "写代码或推理时建议低温度（0–0.3）；创意写作可适当提高（0.7–1.0）。",
    tags: ["大模型", "推理"],
  },
  {
    title: "嵌入向量（Embeddings）",
    summary:
      "Embedding 将离散符号映射到连续向量空间，语义相近的内容在空间中距离更近。",
    insight:
      "RAG 系统的检索质量，很大程度上取决于 Embedding 模型与切块策略。",
    tags: ["RAG", "向量检索"],
  },
  {
    title: "过拟合（Overfitting）",
    summary:
      "模型在训练集上表现很好，但在新数据上泛化差，通常因为记住了噪声而非规律。",
    insight:
      "正则化、Dropout、早停和数据增强，是控制过拟合的三把常用「手术刀」。",
    tags: ["机器学习", "训练"],
  },
  {
    title: "上下文窗口（Context Window）",
    summary:
      "模型单次能处理的 token 上限。窗口越大，能容纳的文档与对话历史越多。",
    insight:
      "长上下文不等于「记得更准」——关键信息仍建议放在提示词靠前位置。",
    tags: ["LLM", "提示词"],
  },
  {
    title: "梯度下降（Gradient Descent）",
    summary:
      "通过计算损失函数对参数的梯度，沿反方向小步更新，逐步逼近最优解。",
    insight:
      "学习率是最敏感的超参数之一：太大震荡，太小收敛慢。",
    tags: ["优化", "训练"],
  },
  {
    title: "零样本 vs 少样本",
    summary:
      "零样本仅靠指令完成任务；少样本在提示中附带几个示例，引导模型模仿格式与风格。",
    insight:
      "复杂结构化输出时，2–3 个高质量示例往往比长篇说明更有效。",
    tags: ["提示词", "LLM"],
  },
  {
    title: "幻觉（Hallucination）",
    summary:
      "模型生成看似合理但事实错误的内容，是概率生成机制与知识边界共同导致的现象。",
    insight:
      "用 RAG 提供可追溯来源、要求引用、并做输出校验，是降低幻觉的实用组合。",
    tags: ["安全", "RAG"],
  },
  {
    title: "批归一化（Batch Normalization）",
    summary:
      "对 mini-batch 内的激活做标准化，稳定训练并允许使用更大学习率。",
    insight:
      "在 CV 任务中 BN 仍是经典组件；Transformer 侧更多使用 LayerNorm。",
    tags: ["深度学习", "训练技巧"],
  },
  {
    title: "LoRA 低秩适配",
    summary:
      "在冻结大模型权重的同时，只训练少量低秩矩阵，大幅降低微调成本。",
    insight:
      "个人开发者微调 7B 模型，LoRA/QLoRA 几乎是默认首选方案。",
    tags: ["微调", "效率"],
  },
  {
    title: "交叉熵损失",
    summary:
      "分类任务中最常用的损失函数，衡量预测分布与真实标签分布的差异。",
    insight:
      "语言模型的「下一个 token 预测」，本质上也是多类分类的交叉熵。",
    tags: ["损失函数", "基础"],
  },
  {
    title: "Agent 工具调用",
    summary:
      "Agent 根据用户目标，自主决定何时调用搜索、代码执行、数据库等外部工具。",
    insight:
      "好的 Agent 设计 = 清晰的工具描述 + 可靠的错误处理 + 可观测的执行日志。",
    tags: ["Agent", "应用"],
  },
];
