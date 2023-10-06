import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs';

import prismadb from '@/lib/prismadb';

export async function PATCH(
  req: Request,
  { params }: { params: { skillId: string } }
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

    if (!params.skillId) {
      return new NextResponse('Skill id is required', { status: 400 });
    }

    const skill = await prismadb.skill.updateMany({
      where: {
        id: params.skillId,
        userId,
      },
      data: {
        label,
        imageUrl,
      },
    });

    return NextResponse.json(skill);
  } catch (error) {
    console.log('[SKILL_PATCH]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { skillId: string } }
) {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse('Unauthenticated', { status: 403 });
    }

    if (!params.skillId) {
      return new NextResponse('Skill id is required', { status: 400 });
    }

    const skill = await prismadb.skill.deleteMany({
      where: {
        id: params.skillId,
        userId,
      },
    });

    return NextResponse.json(skill);
  } catch (error) {
    console.log('[SKILL_DELETE]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}
