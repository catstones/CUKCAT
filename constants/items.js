const listedHaksa = [
  {
    startDate: '2019-09-02',
    endDate: '2019-09-03',
    title: '[9. 2-3]CAMEAD 학생 축제(성의)'
  },
  {
    startDate: '2019-09-02',
    endDate: '2019-09-06',
    title: '[9. 2-6]추가 등록기간(성심)'
  },
  {
    startDate: '2019-09-03',
    endDate: '2019-09-03',
    title: '[9. 3]개강미사(성심)'
  },
  {
    startDate: '2019-09-06',
    endDate: '2019-09-06',
    title: '[9. 6]대학원 학위논문 지도교수 확인서 제출마감(성신)'
  },
  {
    startDate: '2019-09-16',
    endDate: '2019-09-19',
    title: '[9. 16-19]대학원 박사학위 청구논문 접수(성의)'
  },
  {
    startDate: '2019-09-22',
    endDate: '2019-09-22',
    title: '[9. 22]수업일수 1/4 (성심)'
  },
  {
    startDate: '2019-10-04',
    endDate: '2019-10-05',
    title: '[10. 4-5]알마축제(성신)'
  },
  {
    startDate: '2019-10-07',
    endDate: '2019-10-10',
    title: '[10. 7-10]대학원 석사학위 청구논문 접수(성의)'
  },
  {
    startDate: '2019-10-14',
    endDate: '2019-10-18',
    title: '[10. 14-18]중간고사(성신,성심)'
  },
  {
    startDate: '2019-10-14',
    endDate: '2019-10-18',
    title: '[10. 14-18]학부졸업반 선교실습(성신)'
  },
  {
    startDate: '2019-10-20',
    endDate: '2019-10-20',
    title: '[10. 20]수업일수 1/2(성심)'
  },
  {
    startDate: '2019-11-02',
    endDate: '2019-11-02',
    title: '[11. 2]위령의 날(성신)'
  },
  {
    startDate: '2019-11-08',
    endDate: '2019-11-08',
    title:
      '[11. 8]학부 졸업논문, 대학원 학위청구논문, 연구과 수료논문 제출 마감(성신)'
  },
  {
    startDate: '2019-11-15',
    endDate: '2019-11-28',
    title: '[11. 15-28]대학원 학위논문 심사 및 구술시험(성신)'
  },
  {
    startDate: '2019-11-17',
    endDate: '2019-11-17',
    title: '[11. 17]수업일수 3/4(성심)'
  },
  {
    startDate: '2019-11-20',
    endDate: '2019-11-20',
    title: '[11. 20]2020학년도 전기 대학원 입학시험(성신)'
  },
  {
    startDate: '2019-12-06',
    endDate: '2019-12-06',
    title: '[12. 6]종강미사(성신)'
  },
  {
    startDate: '2019-12-09',
    endDate: '2019-12-13',
    title: '[12. 9-13]기말고사(성신,성심)'
  },
  {
    startDate: '2019-12-13',
    endDate: '2019-12-13',
    title: '[12. 13]교수회의(성심)'
  },
  {
    startDate: '2019-12-16',
    endDate: '2019-12-16',
    title: '[12. 16]겨울방학(성신,성심)'
  },
  {
    startDate: '2019-12-16',
    endDate: '2020-01-08',
    title: '[12. 16-1.8]계절학기 수업(성심)'
  },
  {
    startDate: '2019-12-20',
    endDate: '2019-12-20',
    title: '[12. 20]2학기 성적제출 마감(성심)'
  },
  {
    startDate: '2019-12-23',
    endDate: '2019-12-26',
    title: '[12. 23-26]2학기 성적확인 및 오류정정(성심)'
  }
];

const markedHaksa = {
  '2019-09-02': { marked: true },
  '2019-09-03': { marked: true },
  '2019-09-06': { marked: true },
  '2019-09-16': { marked: true },
  '2019-09-19': { marked: true },
  '2019-09-22': { marked: true },
  '2019-10-04': { marked: true },
  '2019-10-05': { marked: true },
  '2019-10-07': { marked: true },
  '2019-10-10': { marked: true },
  '2019-10-14': { marked: true },
  '2019-10-18': { marked: true },
  '2019-10-20': { marked: true },
  '2019-11-02': { marked: true },
  '2019-11-08': { marked: true },
  '2019-11-15': { marked: true },
  '2019-11-17': { marked: true },
  '2019-11-20': { marked: true },
  '2019-11-28': { marked: true },
  '2019-12-06': { marked: true },
  '2019-12-09': { marked: true },
  '2019-12-13': { marked: true },
  '2019-12-16': { marked: true },
  '2019-12-20': { marked: true },
  '2019-12-23': { marked: true },
  '2019-12-26': { marked: true }
};

const developers = [
  {
    version: 'CUKCAT_v1.0.0',
    department: ['frontEnd', 'backend', 'projectManager'],
    frontEnd: [{ name: '한영찬', id: 0 }],
    backEnd: [{ name: '안수빈', id: 0 }, { name: '박진우', id: 1 }],
    projectManager: [{ name: '백상우', id: 0 }]
  },
  {
    version: '가대학사',
    department: ['fullStack', 'frontDesigner'],
    fullStack: [{ name: '백상우', id: 0 }],
    frontDesigner: [{ name: '권세훈', id: 0 }]
  }
];

export { listedHaksa, developers, markedHaksa };
