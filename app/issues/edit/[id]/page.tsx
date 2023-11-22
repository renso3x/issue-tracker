import React from "react";
import prisma from "../../../../prisma/client";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import IssueFormSkeleton from "./loading";

interface Props {
  params: {
    id: string;
  };
}


const IssueForm = dynamic(() => import("../../_components/IssueForm"), {
  ssr: false,
  loading: () => <IssueFormSkeleton />,
});

const EditIssuePage = async  ({ params }: Props) => {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue) notFound()

  return <IssueForm issue={issue} />;
};
export async function generateMetadata({ params }: Props) {
  const issue = await prisma.issue.findUnique({ where: { id: parseInt(params.id) } });
  return {
    title: issue?.title,
    description: 'Details of issue ' + issue?.description 
  }
}

export default EditIssuePage;
