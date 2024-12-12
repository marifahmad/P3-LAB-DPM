const fetchStudents = async () => {
    // Simulating API call
    return new Promise(resolve => {
      setTimeout(() => {
        resolve([
          { id: 1, name: 'Ali Ahmad', nim: '1901001', program: 'Teknik Informatika' },
          { id: 2, name: 'Budi Setiawan', nim: '1901002', program: 'Sistem Informasi' },
          { id: 3, name: 'Citra Dewi', nim: '1901003', program: 'Manajemen Informatika' },
          { id: 4, name: 'Dina Kusuma', nim: '1901004', program: 'Teknologi Informasi' },
        ]);
      }, 2000); // Simulate network latency
    });
  };
  
  export default fetchStudents;
  