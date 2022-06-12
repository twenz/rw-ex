import { db } from 'src/lib/db'
import type { QueryResolvers, MutationResolvers } from 'types/graphql'

export const posts: QueryResolvers['posts'] = () => {
  return db.post.findMany()
}

export const post: QueryResolvers['post'] = ({ id }) => {
  return db.post.findUnique({
    where: { id },
  })
}

export const createPost: MutationResolvers['createPost'] = async ({ input }) => {
  console.log('file: posts.ts ~ line 15 ~ input', input)
  input.year = '1999'
  const created = await db.post.create({
    data: input,
  })
  console.log('file: posts.ts ~ line 20 ~ created', created)

  let _input: typeof input
  _input = { year: (parseInt(created.year) - created.id).toString() }
  const afterSave = await updatePost({ id: created.id, input: _input })
  console.log('file: posts.ts ~ line 28 ~ afterSave', afterSave)

  return created
}

export const updatePost: MutationResolvers['updatePost'] = ({ id, input }) => {
  return db.post.update({
    data: input,
    where: { id },
  })
}

export const deletePost: MutationResolvers['deletePost'] = ({ id }) => {
  return db.post.delete({
    where: { id },
  })
}
