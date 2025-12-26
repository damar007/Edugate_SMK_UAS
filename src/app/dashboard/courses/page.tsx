import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { courses } from '@/lib/data';
import { Users } from 'lucide-react';

export default function CoursesPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold font-headline">Mata Pelajaran</h1>
        <p className="text-muted-foreground">
          Daftar mata pelajaran yang Anda ikuti atau ajar.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <Card key={course.id} className="flex flex-col hover:shadow-lg transition-shadow duration-200">
            <CardHeader>
              <CardTitle className="font-headline">{course.name}</CardTitle>
              <CardDescription>{course.teacher}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                <span className="flex items-center gap-1.5">
                  <Users className="w-4 h-4" />
                  {course.students} Siswa
                </span>
                <span>Progres</span>
              </div>
              <Progress value={course.progress} aria-label={`${course.progress}% progres`} />
              <p className="text-right text-sm font-medium text-primary mt-1">{course.progress}%</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="outline">
                Lihat Detail
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
