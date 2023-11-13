'use client'

import { AlertDialog, Button, Flex } from "@radix-ui/themes";
import Link from "next/link";

const DeleteIssueButton = ({ issueId }: { issueId: number }) => {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        <Button color="red">
          <Link href={`/issues/${issueId}/delete`}> Delete Issue</Link>
        </Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content>
        <AlertDialog.Title>Delete Confirmation</AlertDialog.Title>
        <AlertDialog.Description>
          Are you sure you want to delete issue?
        </AlertDialog.Description>
        <Flex mt="3" gap="3">
          <AlertDialog.Cancel>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <Button color="red">
              Delete Issue
            </Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
};

export default DeleteIssueButton;
