import {
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@fs-starter/ui";

export function ProjectsMenu() {
  return (
    <MenubarMenu>
      <MenubarTrigger>Projects</MenubarTrigger>
      <MenubarContent>
        <MenubarSub>
          <MenubarSubTrigger>Recent</MenubarSubTrigger>
          <MenubarSubContent>
            <MenubarItem>Project 1</MenubarItem>
            <MenubarItem>Project 2</MenubarItem>
            <MenubarItem>Project 3</MenubarItem>
          </MenubarSubContent>
        </MenubarSub>
        <MenubarItem>
          New <MenubarShortcut>⌘N</MenubarShortcut>
        </MenubarItem>
      </MenubarContent>
    </MenubarMenu>
  );
}
