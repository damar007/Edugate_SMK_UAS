'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';
import { user, schedule, grades, announcements } from '@/lib/data';
import { Bell, Book, Clock, Star } from 'lucide-react';

export default function DashboardPage() {
  const todaySchedule = schedule.slice(0, 3); // Mock: just show first 3 for today

  const gradeData = grades.reduce((acc, grade) => {
    const existing = acc.find((item) => item.subject === grade.subject);
    if (existing) {
      existing.grades.push(grade.grade);
      existing.average = Math.round(existing.grades.reduce((a, b) => a + b, 0) / existing.grades.length);
    } else {
      acc.push({ subject: grade.subject, grades: [grade.grade], average: grade.grade });
    }
    return acc;
  }, [] as { subject: string; grades: number[]; average: number }[]);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold font-headline">
            Selamat Datang, {user.name.split(' ')[0]}!
          </h1>
          <p className="text-muted-foreground">
            Berikut adalah ringkasan aktivitas akademik Anda.
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              Jadwal Hari Ini
            </CardTitle>
            <CardDescription>
              Mata pelajaran yang akan Anda ikuti hari ini.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Jam</TableHead>
                  <TableHead>Mata Pelajaran</TableHead>
                  <TableHead>Guru</TableHead>
                  <TableHead>Ruang</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {todaySchedule.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{item.time}</TableCell>
                    <TableCell>{item.subject}</TableCell>
                    <TableCell>{item.teacher}</TableCell>
                    <TableCell>
                      <Badge variant="secondary">{item.room}</Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5 text-primary" />
              Pengumuman
            </CardTitle>
            <CardDescription>
              Informasi terbaru dari sekolah.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4">
              {announcements.slice(0, 3).map((item) => (
                <div key={item.id} className="flex items-start gap-4">
                  <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-accent/20 text-accent">
                    <Bell className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {item.content.substring(0, 50)}...
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="h-5 w-5 text-primary" />
              Ringkasan Nilai
            </CardTitle>
            <CardDescription>
              Rata-rata nilai per mata pelajaran.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={gradeData}>
                <XAxis
                  dataKey="subject"
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `${value}`}
                />
                <Tooltip
                  cursor={{ fill: 'hsl(var(--background))' }}
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    borderColor: 'hsl(var(--border))',
                  }}
                />
                <Bar dataKey="average" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
