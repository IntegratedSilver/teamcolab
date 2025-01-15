import { Button } from '@radix-ui/themes'
import React from 'react'
import Link from "next/link";

const DeleteIssueButton = ({issueId}:{issueId:number}) => {
  return (
    <>
        <Button>
        <Link href={`/issues/${issueId}/delete`}>Delete Issue</Link>
      </Button>
    </>
  )
}

export default DeleteIssueButton