import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import path from "path";
import fs from "fs";
import { mathCategory } from "../constants/category";
import { sanitizeJSON } from "../utils/parse";

const openai = new OpenAI({
  apiKey: process.env.GPT_KEY,
});

export async function POST(req: NextRequest) {
  const imagePath = path.join(process.cwd(), "public", "images", "math2.jpg");
  const base64 = fs.readFileSync(imagePath, { encoding: "base64" });

  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    store: true,
    messages: [
      {
        role: "user",
        content: [
          {
            type: "text",
            text: `첫번째 응답은 다음 수학 문제의 해설을 Markdown 형식으로 작성해주세요. 수식을 LaTeX 형태로 작성하며, 아래와 같은 규칙을 따르세요:
1. 인라인 수식은 \`$ ... $\`로 감싸주세요.
2. 블록 수식은 반드시 공백 없이 \`$$ ... $$\`로 작성해주세요. 수식 내 줄바꿈이 필요한 경우 \`\\\\\`를 사용하세요.
3. Markdown 형식을 유지하고, 수식 렌더링 오류를 방지하기 위해 수식 내부의 여백이나 괄호를 조심스럽게 다루세요.(예시 :문제 해설\n\n주어진 함수 $f(x)$의 그래프에서 정보는 다음과 같습니다:\n\n1. $f(-2) = 0$ 이고, $f(4) = 0$입니다. 즉, 함수 $f(x)$는 $x = -2$와 $x = 4$에서 x축과 만납니다.\n2. 그래프의 형태는 아래로 개방된 포물선입니다. 이는 최고차항의 계수가 1이며, 극댓값이 존재함을 의미합니다. \n\n최고차항의 계수가 1이므로, 일반적인 이차 함수의 형태는 다음과 같습니다:\n\n$$\nf(x) = a(x + 2)(x - 4)\n$$\n\n여기서 $a < 0$입니다. 함수의 그래프는 아래로 개방된 포물선이므로 $a$는 음수입니다.\n\n### 방정식의 해 구하기\n\n우리는 다음 방정식의 두 근을 구해야 합니다:\n\n$$\nf(2x - 1) = 0\n$$\n\n이를 위해 내부 함수의 조건을 설정합니다:\n\n1. $2x - 1 = -2$인 경우:\n   $$ \n   2x - 1 = -2 \\implies 2x = -1 \\implies x = -\\frac{1}{2} \n   $$\n\n2. $2x - 1 = 4$인 경우:\n   $$\n   2x - 1 = 4 \\implies 2x = 5 \\implies x = \\frac{5}{2}\n   $$\n\n따라서 두 근은:\n\n- $x = -\\frac{1}{2}$\n- $x = \\frac{5}{2}$\n\n따라서 방정식 $f(2x - 1) = 0$의 두 근의 합은 다음과 같습니다:\n\n$$\n-\\frac{1}{2} + \\frac{5}{2} = 2\n$$\n\n### 결론\n\n주어진 방정식의 두 근의 합은 2입니다.)
4. 수학적 계산 과정을 단계적으로 명확히 나열하고, 동일한 내용을 중복 서술하지 마세요.
5. 결론은 수식과 함께 한 번만 작성하세요. 동일한 결론을 다른 표현으로 반복하지 마세요.
두번째 응답은 해당문제의 유형을 골라야합니다. ${mathCategory}중에 골라 제출해주세요.
세번째 응답은 해당 문제의 난이도를 제출해주세요. (쉬움, 보통, 어려움).
네번째 응답은 해당 문제의 정답을 제출해주세요. 정답은 아래 조건에 맞게 번호를 선택하여 제출해주세요:
주어진 문제에 보기가 존재하는지 판단하여 객관식 문제인지 주관식 문제인지 확인하고, 객관식 문제일 경우 보기에서 정답에 해당하는 번호를 제출해주세요. 주관식 문제일 경우 문제에서 도출된 최종 정답 내용을 직접 제출해주세요.
   - **객관식**: 주어진 보기에서 "정답 값"에 해당하는 **정확한 번호**를 제출하세요. (예: 정답 값이 2라면, 보기에서 값이 2인 번호를 제출하세요. 예: 보기: 1:10, 2:5 → 정답 값이 5라면 정답 번호는 2입니다.)
   - **주관식**: 문제에서 도출된 최종 정답 내용을 직접 제출하세요. (예: x = -1, 10)
제일 중요한 답변의 형식에 대해 알려드리겠습니다.
1. 반드시 올바른 JSON 배열 형식으로 제출하세요. 배열의 각 요소는 순서대로 해설, 유형, 난이도, 정답이어야 합니다.
   - 예: ["해설", "유형", "난이도", "정답"]
2. JSON 형식이 아닌 경우 응답은 잘못된 것으로 간주됩니다. 반드시 JSON형식으로 파싱 가능한 형태로 제출하세요.
3. 모든 배열 요소는 비어있지 않아야 합니다. 하나라도 누락되면 올바른 응답으로 처리되지 않습니다. 
`,
          },
          {
            type: "image_url",
            image_url: { url: `data:image/jpeg;base64,${base64}` },
          },
        ],
      },
    ],
  });

  const response = completion.choices[0].message.content;
  console.log("response:", response);
  if (!response)
    return NextResponse.json(
      { message: "No response from AI" },
      { status: 400 }
    );

  const match = response.match(/```json\n([\s\S]*?)\n```/);

  if (match && match[1]) {
    console.log("match:", match[1]);
    console.log("trim", match[1].trim());
    const parsed = JSON.parse(match[1].trim());
    console.log("parsed:", parsed);

    const structuredData = {
      explanation: parsed[0],
      category: parsed[1],
      difficulty: parsed[2],
      answer: parsed[3],
    };

    return NextResponse.json({ structuredData });
  }

  return NextResponse.json(
    { message: "No structured data found" },
    { status: 400 }
  );
}
