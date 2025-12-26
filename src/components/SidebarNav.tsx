'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { BookOpen, Calendar, GraduationCap, LayoutDashboard, Notebook } from 'lucide-react';

const links = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Jadwal', href: '/dashboard/schedule', icon: Calendar },
  { name: 'Mata Pelajaran', href: '/dashboard/courses', icon: BookOpen },
  { name: 'Nilai', href: '/dashboard/gradebook', icon: GraduationCap },
];

export function SidebarNav() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-2 p-4">
      {links.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link href={link.href} key={link.name}>
            <Button
              variant={isActive ? 'default' : 'ghost'}
              className="w-full justify-start text-base h-12"
              aria-current={isActive ? 'page' : undefined}
            >
              <link.icon className="mr-3 h-5 w-5" />
              {link.name}
            </Button>
          </Link>
        );
      })}
    </nav>
  );
}
