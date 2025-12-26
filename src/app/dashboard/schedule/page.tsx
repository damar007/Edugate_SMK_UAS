import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { schedule } from '@/lib/data';

const days = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat'];

export default function SchedulePage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold font-headline">Jadwal Pelajaran</h1>
        <p className="text-muted-foreground">
          Berikut adalah jadwal pelajaran Anda untuk minggu ini.
        </p>
      </div>
      <Card>
        <CardContent className="p-2 md:p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {days.map((day) => (
              <div key={day} className="flex flex-col gap-4">
                <div className="text-center font-bold p-2 bg-muted rounded-lg font-headline">
                  {day}
                </div>
                <div className="flex flex-col gap-3">
                  {schedule
                    .filter((item) => item.day === day)
                    .sort((a,b) => a.time.localeCompare(b.time))
                    .map((item, index) => (
                      <Card key={index} className="shadow-sm hover:shadow-md transition-shadow duration-200">
                        <CardHeader className="p-4">
                          <CardTitle className="text-base">{item.subject}</CardTitle>
                          <CardDescription>{item.teacher}</CardDescription>
                        </CardHeader>
                        <CardContent className="p-4 pt-0 flex justify-between items-center text-sm">
                          <span>{item.time}</span>
                          <Badge variant="outline">{item.room}</Badge>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
