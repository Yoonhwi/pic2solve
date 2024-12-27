"use client";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";

interface ResponseType {
  explanation: string;
  category: string;
  difficulty: string;
  answer: string;
}

const demoRequest = `
## 문제 해설\n\n주어진 함수 $f(x)$의 그래프에서 정보는 다음과 같습니다:\n\n1. $f(-2) = 0$ 이고, $f(4) = 0$입니다. 즉, 함수 $f(x)$는 $x = -2$와 $x = 4$에서 x축과 만납니다.\n2. 그래프의 형태는 아래로 개방된 포물선입니다. 이는 최고차항의 계수가 1이며, 극댓값이 존재함을 의미합니다. \n\n최고차항의 계수가 1이므로, 일반적인 이차 함수의 형태는 다음과 같습니다:\n\n$$\nf(x) = a(x + 2)(x - 4)\n$$\n\n여기서 $a < 0$입니다. 함수의 그래프는 아래로 개방된 포물선이므로 $a$는 음수입니다.\n\n### 방정식의 해 구하기\n\n우리는 다음 방정식의 두 근을 구해야 합니다:\n\n$$\nf(2x - 1) = 0\n$$\n\n이를 위해 내부 함수의 조건을 설정합니다:\n\n1. $2x - 1 = -2$인 경우:\n   $$ \n   2x - 1 = -2 \\implies 2x = -1 \\implies x = -\\frac{1}{2} \n   $$\n\n2. $2x - 1 = 4$인 경우:\n   $$\n   2x - 1 = 4 \\implies 2x = 5 \\implies x = \\frac{5}{2}\n   $$\n\n따라서 두 근은:\n\n- $x = -\\frac{1}{2}$\n- $x = \\frac{5}{2}$\n\n따라서 방정식 $f(2x - 1) = 0$의 두 근의 합은 다음과 같습니다:\n\n$$\n-\\frac{1}{2} + \\frac{5}{2} = 2\n$$\n\n### 결론\n\n주어진 방정식의 두 근의 합은 2입니다. \n\n정답은 **3**입니다.
`;
// const demo2Request = `["그래프의 형태에 따르면, 이는 포물선이며, 주어진 조건에 의해 하나의 x축 절편이 존재합니다. 주어진 방정식 $f(2x - 1) = 0$ 에 대해 두 근을 구해야 합니다. $f(x)$의 x축에서의 교점이 $-2$와 $4$이며, 이 점들을 이용하여 방정식을 변형하면, 두 근의 값은 $x_1$과 $x_2$로 표현됩니다. 여기서, $x = \frac{1}{2}(x_1 + x_2)$ 를 통해 $2x-1 = x_1$ 또는 $x_2$로 변형해 나가면서 조건을 정리할 수 있습니다. 근의 다항식을 분석하여, 이를 통해 두 근을 추출하는 것이 주 목적입니다.", "방정식과 부등식", "보통", "정답번호: 2"]`;
const TestPage = () => {
  const [response, setResponse] = useState<ResponseType>();

  useEffect(() => {
    fetch("/api/ai", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(async (res) => {
      const data = await res.json();
      setResponse(data.structuredData);
    });
  }, []);

  return (
    <div className="w-[960px] px-[10px]">
      <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
        {response?.explanation}
      </ReactMarkdown>
    </div>
  );
};

export default TestPage;
