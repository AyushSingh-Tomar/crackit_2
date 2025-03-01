"use client";
import { useRouter } from 'next/navigation';
import Link from "next/link";
import { Button } from "./ui/button";
import { LayoutDashboard } from "lucide-react";
import { useUserRole } from "@/hooks/useUserRole";

function DashboardBtn() {
  const { isCandidate, isLoading } = useUserRole();

  if (isCandidate || isLoading) return null;
  
    const router = useRouter();
  
    const goToDashboard = () => {
      router.push('/dashboard');
    };
  return (
    <Link href={"/dashboard"}>
      <Button className="gap-2 font-medium" size={"sm"}
      onClick={goToDashboard}>
        <LayoutDashboard className="size-4" />
        Dashboard
      </Button>
    </Link>
  );
}
export default DashboardBtn;