import React, { useState } from "react";
import { gql, useQuery } from "@apollo/client"
import { useRouter } from "next/router";

const GET_QUIZ = gql`
    query GetQuiz {
      items: quiz {
          id
          title
          description
          format_parser
          created_by
          created_at
          deleted_at
          updated_at
      }
    }
`;

export default function Quiz() {
  const { loading, error, data } = useQuery(GET_QUIZ, {});
  const router = useRouter();

  const nextPage = (id: string) => {
    router.push(`/quiz/${id}`);
  }
  if (loading) {
    return (
      <div className="m-4">
        <div className="border border-blue-300 shadow rounded-md p-4 max-m-sm w-full mx-auto">
          <div className="animate-pulse flex space-x-4">
            <div className="rounded-full bg-slate-200 h-10 w-10"></div>
            <div className="flex-1 space-y-6 py-1">
              <div className="h-2 bg-slate-200 rounded"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                  <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                </div>
                <div className="h-2 bg-slate-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="container mx-auto px-4">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="py-8">
          <div>
            <h2 className="text-2xl font-semibold leading-tight">All Quiz</h2>
          </div>
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div
              className="inline-block min-w-full shadow-md rounded-lg overflow-hidden"
            >
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    {
                      ['ID', 'Title', 'Description', 'Action'].map((e) => {
                        return <th
                          className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                        >
                          {e}
                        </th>;
                      })
                    }
                  </tr>
                </thead>
                <tbody>
                  {
                    (data?.items ?? []).map((e: any) => {
                      return (<tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <button onClick={() => nextPage(e['id'])}>{e['id']}</button>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{e['title']}</td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{e['description']}</td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <button
                            type="button"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                          >
                            Edit
                          </button>
                          <button
                            type="button"
                            className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
                          >
                            Disable
                          </button>
                          <button
                            type="button"
                            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>);
                    })
                  }</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}
