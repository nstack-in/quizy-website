import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React from "react";
import md from 'markdown-it';

const GET_QUIZ_BY_ID = gql`
    query GetQuizById($id: bigint!) {
      items: quiz(where: {id: {_eq: $id}}) {
        id
        created_by
        description
        format_parser
        full_page
        title
        created_at
        deleted_at
        updated_at
      }
    }
`;

export default function Quiz() {
  const router = useRouter();
  const id = router.query['id'] as string;
  const { loading, error, data } = useQuery(GET_QUIZ_BY_ID, { variables: { id: id } });
  const content = (data && data['items'][0]['full_page']) ?? 'MD';
  return (
    <div className="container mx-auto px-4">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="py-8">
          <div>
            <h2 className="text-2xl font-semibold leading-tight">Quiz Details</h2>
          </div>
          <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
        </div>
      </div>
    </div >
  )
}
