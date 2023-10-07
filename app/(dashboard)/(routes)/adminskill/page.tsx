import { format } from 'date-fns';

import prismadb from '@/lib/prismadb';

import { SkillColumn } from './components/columns';
import { SkillClient } from './components/client';

const SkillsPage = async ({ params }: { params: { skillId: string } }) => {
  const skills = await prismadb.skill.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

  const formattedSkills: SkillColumn[] = skills.map((item) => ({
    id: item.id,
    label: item.label,
    imageUrl: item.imageUrl,
    createdAt: format(item.createdAt, 'MMMM do, yyyy'),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <SkillClient data={formattedSkills} />
      </div>
    </div>
  );
};

export default SkillsPage;
