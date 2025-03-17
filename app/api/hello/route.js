// app/api/hello/route.js
export async function GET() {
  try {
    // Your logic here
    return Response.json({ message: 'Hello, this is a Next.js API!' });
  } catch (error) {
    return Response.json({ error: 'Something went wrong' }, { status: 500 });
  }
}