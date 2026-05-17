export type LessonSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type LessonContent = {
  slug: string;
  title: string;
  description: string;
  readMinutes: number;
  sections: LessonSection[];
};

export const lessons: Record<string, LessonContent> = {
  "what-is-ai": {
    slug: "what-is-ai",
    title: "什么是人工智能",
    description: "理解 AI 的定义、能力边界与典型应用场景。",
    readMinutes: 5,
    sections: [
      {
        heading: "核心定义",
        paragraphs: [
          "人工智能（Artificial Intelligence）是让计算机系统模拟人类智能行为的技术集合，包括感知、推理、学习、规划与自然语言交互。",
          "现代 AI 并非单一算法，而是数据、算力、模型架构与工程系统共同作用的结果。",
        ],
      },
      {
        heading: "主要分支",
        paragraphs: ["当前工业界最活跃的方向包括："],
        bullets: [
          "机器学习：从数据中自动学习规律",
          "深度学习：基于神经网络的表示学习",
          "大语言模型：通用语言理解与生成",
          "多模态 AI：融合文本、图像、音频等信号",
        ],
      },
    ],
  },
  "ml-vs-dl": {
    slug: "ml-vs-dl",
    title: "机器学习 vs 深度学习",
    description: "厘清两者关系、适用场景与选型思路。",
    readMinutes: 6,
    sections: [
      {
        heading: "关系",
        paragraphs: [
          "深度学习是机器学习的一个子集，特指使用多层神经网络进行特征学习与预测的方法。",
          "传统机器学习更依赖人工特征工程；深度学习能自动从原始数据中学习层次化表示。",
        ],
      },
      {
        heading: "何时用深度学习",
        bullets: [
          "数据量大、标注成本可接受",
          "输入为高维非结构化数据（图像、文本、语音）",
          "任务需要复杂非线性映射",
        ],
        paragraphs: ["数据量小、可解释性要求高时，可优先尝试树模型、线性模型等经典方法。"],
      },
    ],
  },
  "ai-workflow": {
    slug: "ai-workflow",
    title: "AI 产品开发流程",
    description: "从问题定义到上线迭代的完整链路。",
    readMinutes: 7,
    sections: [
      {
        heading: "标准流程",
        bullets: [
          "问题定义与成功指标",
          "数据收集与质量评估",
          "基线模型与快速验证",
          "迭代优化与 A/B 测试",
          "监控、反馈与持续学习",
        ],
        paragraphs: ["AI 产品成功的关键，往往在于问题是否被正确定义，而非模型是否最复杂。"],
      },
    ],
  },
  "supervised-learning": {
    slug: "supervised-learning",
    title: "监督学习",
    description: "有标签数据驱动的分类与回归任务。",
    readMinutes: 8,
    sections: [
      {
        heading: "基本范式",
        paragraphs: [
          "监督学习使用输入—标签对 (x, y) 训练模型，学习从 x 预测 y 的映射函数。",
          "分类任务预测离散类别；回归任务预测连续数值。",
        ],
      },
    ],
  },
  "feature-engineering": {
    slug: "feature-engineering",
    title: "特征工程",
    description: "将原始数据转化为模型可学习的有效表示。",
    readMinutes: 7,
    sections: [
      {
        heading: "常见技术",
        bullets: ["缺失值处理", "标准化 / 归一化", "类别编码", "特征交叉与选择"],
        paragraphs: ["好的特征工程能在同等模型下显著提升效果，尤其在表格数据场景中。"],
      },
    ],
  },
  "model-evaluation": {
    slug: "model-evaluation",
    title: "模型评估指标",
    description: "准确率、F1、AUC、RMSE 等指标的含义与选用。",
    readMinutes: 6,
    sections: [
      {
        heading: "分类指标",
        bullets: ["Accuracy：整体正确率", "Precision / Recall：查准与查全", "F1：二者调和平均", "AUC-ROC：排序能力"],
        paragraphs: ["类别不平衡时，Accuracy 可能误导，应结合 F1 与混淆矩阵分析。"],
      },
    ],
  },
  "neural-networks": {
    slug: "neural-networks",
    title: "神经网络基础",
    description: "感知机、激活函数、反向传播与多层网络。",
    readMinutes: 10,
    sections: [
      {
        heading: "组成要素",
        bullets: ["线性变换（权重 + 偏置）", "非线性激活（ReLU、GELU 等）", "损失函数与反向传播"],
        paragraphs: ["深度网络通过堆叠非线性层，拟合复杂的输入—输出关系。"],
      },
    ],
  },
  "cnn-intro": {
    slug: "cnn-intro",
    title: "卷积神经网络",
    description: "局部感受野、权值共享与视觉任务应用。",
    readMinutes: 8,
    sections: [
      {
        heading: "核心思想",
        paragraphs: [
          "卷积层通过滑动窗口提取局部模式，参数共享大幅降低模型规模。",
          "池化层逐步降低空间分辨率，增强平移不变性。",
        ],
      },
    ],
  },
  "transformer-arch": {
    slug: "transformer-arch",
    title: "Transformer 架构",
    description: "Self-Attention、位置编码与现代 LLM 的基石。",
    readMinutes: 12,
    sections: [
      {
        heading: "架构要点",
        bullets: ["Multi-Head Self-Attention", "前馈网络 FFN", "残差连接与 LayerNorm", "位置编码"],
        paragraphs: ["Transformer 摒弃 RNN 的序列依赖，实现高度并行化训练，成为大模型时代的基础结构。"],
      },
    ],
  },
  "prompt-engineering": {
    slug: "prompt-engineering",
    title: "提示词工程",
    description: "设计高效提示，释放大模型能力。",
    readMinutes: 8,
    sections: [
      {
        heading: "实用技巧",
        bullets: ["角色设定与任务边界", "分步推理（Chain-of-Thought）", "输出格式约束", "示例驱动（Few-shot）"],
        paragraphs: ["提示词是「软接口」——清晰、具体、可验证的要求，能显著降低无效输出。"],
      },
    ],
  },
  "rag-basics": {
    slug: "rag-basics",
    title: "RAG 检索增强",
    description: "用外部知识库增强大模型回答的准确性与时效性。",
    readMinutes: 9,
    sections: [
      {
        heading: "工作流程",
        bullets: ["文档切块与向量化", "查询检索 Top-K", "将检索结果注入上下文", "模型生成最终回答"],
        paragraphs: ["RAG 适合企业知识库、客服、文档问答等需要「可追溯来源」的场景。"],
      },
    ],
  },
  "fine-tuning": {
    slug: "fine-tuning",
    title: "微调与对齐",
    description: "SFT、RLHF 与领域适配方法概览。",
    readMinutes: 10,
    sections: [
      {
        heading: "常见路径",
        bullets: ["全量微调：效果最好，成本最高", "LoRA：低秩适配，性价比高", "DPO / RLHF：偏好对齐与安全"],
        paragraphs: ["多数团队从 LoRA + 高质量指令数据开始，再视效果决定是否加大投入。"],
      },
    ],
  },
  "ai-agents": {
    slug: "ai-agents",
    title: "AI Agent 设计",
    description: "规划、记忆、工具调用与多步任务执行。",
    readMinutes: 9,
    sections: [
      {
        heading: "Agent 循环",
        paragraphs: ["典型 Agent 遵循「感知 → 规划 → 行动 → 观察」循环，直到任务完成或达到步数上限。"],
        bullets: ["规划器：分解子目标", "工具层：可执行动作", "记忆：短期上下文 + 长期存储"],
      },
    ],
  },
  "multimodal": {
    slug: "multimodal",
    title: "多模态应用",
    description: "图文理解、语音交互与跨模态生成。",
    readMinutes: 7,
    sections: [
      {
        heading: "应用场景",
        bullets: ["图文问答", "图像描述与 OCR", "语音助手", "视频内容理解"],
        paragraphs: ["多模态模型将不同模态映射到统一表示空间，实现跨模态推理与生成。"],
      },
    ],
  },
  "ai-ethics": {
    slug: "ai-ethics",
    title: "AI 伦理与安全",
    description: "偏见、隐私、滥用风险与 Responsible AI。",
    readMinutes: 6,
    sections: [
      {
        heading: "关键议题",
        bullets: ["训练数据偏见", "隐私与数据合规", "深度伪造与滥用", "透明度与可解释性"],
        paragraphs: ["技术能力与治理机制需同步建设，尤其在面向公众的产品中。"],
      },
    ],
  },
  "python-stack": {
    slug: "python-stack",
    title: "Python AI 工具链",
    description: "PyTorch、Hugging Face、LangChain 等生态概览。",
    readMinutes: 8,
    sections: [
      {
        heading: "常用库",
        bullets: ["PyTorch / JAX：训练框架", "Hugging Face：模型与数据集", "LangChain / LlamaIndex：应用编排", "Gradio / Streamlit：快速 Demo"],
        paragraphs: ["选型时优先考虑社区活跃度、文档质量与团队现有技术栈。"],
      },
    ],
  },
  "api-integration": {
    slug: "api-integration",
    title: "API 接入实践",
    description: "调用 OpenAI 兼容 API 的工程要点。",
    readMinutes: 7,
    sections: [
      {
        heading: "工程建议",
        bullets: ["流式输出提升体验", "重试与指数退避", "Token 用量监控", "敏感信息脱敏"],
        paragraphs: ["生产环境务必设置速率限制、超时与熔断，避免级联故障。"],
      },
    ],
  },
  "deploy-ml": {
    slug: "deploy-ml",
    title: "模型部署入门",
    description: "推理服务、容器化与性能优化基础。",
    readMinutes: 8,
    sections: [
      {
        heading: "部署形态",
        bullets: ["REST / gRPC API", "Serverless 推理", "边缘设备部署", "批处理离线推理"],
        paragraphs: ["延迟、吞吐、成本三者需权衡；大模型常配合量化与批处理优化。"],
      },
    ],
  },
};

export function getLessonContent(slug: string): LessonContent | undefined {
  return lessons[slug];
}
