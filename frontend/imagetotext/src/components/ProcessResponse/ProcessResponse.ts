
interface ProcessResponseProps {
  res: Response | null,
  setText: React.Dispatch<React.SetStateAction<string>>
}

async function ProcessResponse({res, setText }: ProcessResponseProps): Promise<void> {
  if (!res) return;

  const data = await res.json();
  setText(data.text);
}

export default ProcessResponse;