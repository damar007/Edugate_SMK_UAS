// This file contains mock data.
// In a real application, this data would come from a database or API.

// The user object is now handled by Firebase Authentication.
// You can get the user's information from the useUser() hook.
// Example: const { user } = useUser();
// if (user) {
//   const name = user.displayName;
//   const email = user.email;
//   const avatar = user.photoURL;
// }

export const schedule = [
  { day: 'Senin', time: '07:00 - 08:30', subject: 'Matematika', teacher: 'Budi Santoso, S.Pd.', room: 'R-101' },
  { day: 'Senin', time: '08:30 - 10:00', subject: 'Bahasa Indonesia', teacher: 'Citra Lestari, S.Pd.', room: 'R-102' },
  { day: 'Selasa', time: '09:00 - 10:30', subject: 'Dasar Desain Grafis', teacher: 'Rizky Pratama, S.Ds.', room: 'Lab-Komp 1' },
  { day: 'Rabu', time: '10:30 - 12:00', subject: 'Pendidikan Jasmani', teacher: 'Agung Wijaya, S.Or.', room: 'Lapangan' },
  { day: 'Kamis', time: '07:00 - 08:30', subject: 'Bahasa Inggris', teacher: 'Sarah Puspita, M.Pd.', room: 'R-201' },
  { day: 'Jumat', time: '08:00 - 09:30', subject: 'Pemrograman Web', teacher: 'Doni Firmansyah, S.Kom.', room: 'Lab-Komp 2' },
];

export const grades = [
    { subject: 'Matematika', type: 'Tugas 1', grade: 85, date: '2023-10-01' },
    { subject: 'Matematika', type: 'UTS', grade: 78, date: '2023-10-15' },
    { subject: 'Bahasa Indonesia', type: 'Presentasi', grade: 92, date: '2023-10-05' },
    { subject: 'Dasar Desain Grafis', type: 'Projek Akhir', grade: 88, date: '2023-11-01' },
    { subject: 'Pemrograman Web', type: 'Tugas 2', grade: 95, date: '2023-11-05' },
    { subject: 'Bahasa Inggris', type: 'UTS', grade: 82, date: '2023-10-18' },
];

export const announcements = [
  { id: 1, title: 'Ujian Akhir Semester (UAS) Ganjil', date: '2023-11-20', content: 'Jadwal UAS Ganjil akan dilaksanakan mulai tanggal 4 - 8 Desember 2023. Pastikan untuk mempersiapkan diri.' },
  { id: 2, title: 'Kegiatan Class Meeting', date: '2023-11-18', content: 'Akan diadakan class meeting setelah UAS pada tanggal 11-13 Desember. Akan ada berbagai lomba antar kelas.' },
  { id: 3, title: 'Libur Maulid Nabi Muhammad SAW', date: '2023-09-25', content: 'Diberitahukan bahwa tanggal 28 September 2023 adalah hari libur nasional dalam rangka memperingati Maulid Nabi Muhammad SAW.' },
];

export const courses = [
  { id: 'PW-101', name: 'Pemrograman Web', teacher: 'Doni Firmansyah, S.Kom.', students: 40, progress: 75 },
  { id: 'DDG-101', name: 'Dasar Desain Grafis', teacher: 'Rizky Pratama, S.Ds.', students: 38, progress: 60 },
  { id: 'MTK-101', name: 'Matematika', teacher: 'Budi Santoso, S.Pd.', students: 42, progress: 90 },
  { id: 'BIG-101', name: 'Bahasa Inggris', teacher: 'Sarah Puspita, M.Pd.', students: 41, progress: 85 },
];

export const gradebook = {
  'PW-101': [
    { studentId: 'S-001', name: 'Ahmad Dahlan', assignment1: 85, assignment2: 90, uts: 88, uas: null },
    { studentId: 'S-002', name: 'Siti Aisyah', assignment1: 92, assignment2: 95, uts: 94, uas: null },
    { studentId: 'S-003', name: 'Bambang Pamungkas', assignment1: 78, assignment2: 82, uts: 80, uas: null },
    { studentId: 'S-004', name: 'Putri Ayu', assignment1: 88, assignment2: 85, uts: 86, uas: null },
  ],
  'DDG-101': [
    { studentId: 'S-002', name: 'Siti Aisyah', project1: 90, project2: 88, uts: 91, uas: null },
    { studentId: 'S-005', name: 'Eka Kurniawan', project1: 85, project2: 82, uts: 84, uas: null },
  ],
};
