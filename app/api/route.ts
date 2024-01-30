export const dynamic = "force-dynamic"; // defaults to auto
export async function GET(request: Request) {
  console.log(request.url);

  const data = {
    message: "Orderly API. Powers Orderly",
  };

  return Response.json(data);
}
