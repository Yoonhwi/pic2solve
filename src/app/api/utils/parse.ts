export const sanitizeJSON = (jsonString: string) => {
  return (
    jsonString
      // 백슬래시(`\`)를 두 번으로 변환 (JSON 표준에 맞춤)
      .replace(/\\/g, "\\\\")
      // JSON 문자열 내 따옴표(`"`)를 이스케이프
      .replace(/(?<!\\)"/g, '\\"')
      // 줄바꿈(`\n`)을 JSON 표준에 맞게 변환
      .replace(/\n/g, "\\n")
      .replace(/\r/g, "\\r")
      // Markdown 헤더 제거
      .replace(/##\s+/g, "")
      // 추가 공백 제거
      .trim()
  );
};
