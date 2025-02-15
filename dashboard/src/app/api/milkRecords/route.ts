import { NextResponse } from 'next/server';
export async function GET() {

  try {
    const response = await fetch("https://fanikisha-3beb7fcefffe.herokuapp.com/api/milk-records/");

    if (!response.ok) {
      const textResponse = await response.text();

      return NextResponse.json(
        { error: textResponse || 'Failed to fetch milk records' },
        { status: response.status }
      );
    }

    const milkRecords = await response.json();

    return NextResponse.json(milkRecords, { status: 200 });

  } catch (error) {
    return NextResponse.json(
      { error: 'An unexpected error occurred. ' + (error as Error).message },
      { status: 500 }
    );
  }
}