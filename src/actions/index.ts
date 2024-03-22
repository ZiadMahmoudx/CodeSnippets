'use server';

import { db } from '@/db';
import { redirect } from 'next/navigation';

export async function editSnippetAction(id: number, code: string) {
  await db.snippet.update({
    where: { id },
    data: { code }
  });
  redirect(`/snippets/${id}`);
}

export async function deleteSnippetAction(id: number) {
  await db.snippet.delete({
    where: { id }
  });

  redirect('/');
}
