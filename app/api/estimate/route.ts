import { calculateEstimate } from "@/lib/estimateLogic";

export async function POST(req: Request) {
  const body = await req.json();
  const result = calculateEstimate(body);

  return Response.json(result);
}