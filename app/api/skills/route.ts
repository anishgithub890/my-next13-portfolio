import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs';

import prismadb from '@/lib/prismadb';

export async function POST(
  req: Request,
  { params }: { params: { storeId: string } }
) {
  try {
    const { userId } = auth();

    const body = await req.json();

    const { label, imageUrl } = body;

    if (!userId) {
      return new NextResponse('Unauthenticated', { status: 403 });
    }

    if (!label) {
      return new NextResponse('Label is required', { status: 400 });
    }

    if (!imageUrl) {
      return new NextResponse('Image URL is required', { status: 400 });
    }

    const skill = await prismadb.skill.create({
      data: {
        label,
        imageUrl,
        userId,
      },
    });

    return NextResponse.json(skill);
  } catch (error) {
    console.log('[SKILL_POST]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}
