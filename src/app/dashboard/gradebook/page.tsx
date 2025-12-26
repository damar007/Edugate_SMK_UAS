'use client';

import * as React from 'react';
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { gradebook, courses } from '@/lib/data';

export default function GradebookPage() {
  const [selectedCourse, setSelectedCourse] = React.useState(courses[0].id);
  const [grades, setGrades] = React.useState(gradebook[selectedCourse as keyof typeof gradebook] || []);

  const handleCourseChange = (courseId: string) => {
    setSelectedCourse(courseId);
    setGrades(gradebook[courseId as keyof typeof gradebook] || []);
  };
  
  const handleGradeChange = (studentId: string, assignment: string, value: string) => {
    const newGrades = grades.map(g => {
        if (g.studentId === studentId) {
            return {...g, [assignment]: value ? parseInt(value) : null};
        }
        return g;
    });
    setGrades(newGrades);
  }

  const courseHeaders = courses.find(c => c.id === selectedCourse)?.id.startsWith('PW') 
    ? ['Tugas 1', 'Tugas 2', 'UTS', 'UAS'] 
    : ['Projek 1', 'Projek 2', 'UTS', 'UAS'];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold font-headline">Buku Nilai</h1>
          <p className="text-muted-foreground">
            Kelola nilai siswa untuk setiap mata pelajaran.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Select value={selectedCourse} onValueChange={handleCourseChange}>
            <SelectTrigger className="w-full md:w-[280px] bg-card">
              <SelectValue placeholder="Pilih Mata Pelajaran" />
            </SelectTrigger>
            <SelectContent>
              {courses.map((course) => (
                <SelectItem key={course.id} value={course.id}>
                  {course.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button>Simpan Perubahan</Button>
        </div>
      </div>
      <Card>
        <CardContent className="pt-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[250px]">Nama Siswa</TableHead>
                {courseHeaders.map(header => (
                    <TableHead key={header} className="text-center">{header}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {grades.map((grade) => (
                <TableRow key={grade.studentId}>
                  <TableCell className="font-medium">{grade.name}</TableCell>
                  {courseHeaders.map(header => {
                    const assignmentKey = header.toLowerCase().replace(' ', '');
                    return (
                        <TableCell key={assignmentKey}>
                            <Input
                                type="number"
                                className="w-20 text-center mx-auto"
                                value={grade[assignmentKey as keyof typeof grade] ?? ''}
                                onChange={(e) => handleGradeChange(grade.studentId, assignmentKey, e.target.value)}
                            />
                        </TableCell>
                    )
                  })}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
