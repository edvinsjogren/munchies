export default async function fetchWrapper<T>(endpoint: string): Promise<T> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}${endpoint}`,
      {
        headers: {
          'Cache-Control': 'no-cache, no-store',
          Accept: 'application/json',
        },
      },
    );
    if (!response.ok) {
      let errorReason = 'An error occurred while fetching data';
      try {
        const errorResponse: { error: boolean; reason: string } =
          await response.json();
        errorReason = errorResponse.reason || errorReason;
      } catch (jsonError) {
        console.error('Error parsing error response:', jsonError);
      }
      throw new Error(errorReason);
    }

    return response.json() as Promise<T>;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error('An unexpected error occurred');
    }
  }
}
