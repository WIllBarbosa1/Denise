const teamInfo = [
  {
    name: "Will de Azevedo",
    gitUrl: "https://github.com/WIllBarbosa1",
    avatarUrl: "https://avatars.githubusercontent.com/u/66179369?v=4",
    linkedinUrl: "https://www.linkedin.com/in/willbarbosa/",
    lattesUrl: "",
    email: "willazevedo1@gmail.com",
  },
  {
    name: "Arthur Isvi",
    gitUrl: "https://github.com/arthurisvi",
    avatarUrl: "https://avatars.githubusercontent.com/u/83462514?v=4",
    linkedinUrl: "https://www.linkedin.com/in/arthurisvi/",
    lattesUrl: "",
    email: "arthurisvi@upe.br",
  },
  {
    name: "Patricia Takako Endo",
    gitUrl: "",
    avatarUrl:
      "https://media-exp1.licdn.com/dms/image/C4E03AQFi_u8Kg1gTAg/profile-displayphoto-shrink_400_400/0/1637932516896?e=1671062400&v=beta&t=hlLW6JcMan6S9UKZeeL1HQPzwYaKQ-W98UIfG7hnLbM",
    linkedinUrl: "https://www.linkedin.com/in/patricia-takako-endo-8bba69226/",
    lattesUrl: "http://lattes.cnpq.br/5055727404635243",
    email: "tto@ecomp.poli.br",
  },
];

const symptoms = {
  febre: {
    label: "Febre",
    value: false,
    detail: "",
  },
  mialgia: {
    label: "Mialgia",
    value: false,
    detail: "Dor muscular",
  },
  cefaleia: {
    label: "Cefaleia",
    value: false,
    detail: "Dor de cabeça",
  },
  exantema: {
    label: "Exantema",
    value: false,
    detail:
      "Erupção geralmente avermelhada que aparece na pele devido à dilatação dos vasos sanguíneos ou inflamação",
  },
  vomito: {
    label: "Vomito",
    value: false,
    detail: "",
  },
  nausea: {
    label: "Nausea",
    value: false,
    detail: "",
  },
  dorCostas: {
    label: "Dor nas costas",
    value: false,
    detail: "",
  },
  astralgia: {
    label: "Astralgia",
    value: false,
    detail: "Dor nas articulações",
  },
  dorRetro: {
    label: "Dor retroorbital",
    value: false,
    detail: "Dor ao redor dos olhos",
  },
  leucopenia: {
    label: "Leucopenia",
    value: false,
    detail: "Baixa de glóbulos brancos",
  },
  petequias: {
    label: "Petequias",
    value: false,
    detail:
      "Pequenas manchas ou pontos vermelhos, roxos ou marrom que surgem geralmente aglomeradas, como resultado do sangramento sob a pele ou mucosas",
  },
};

export function mockFetchGetSymptoms() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: symptoms,
      });
    }, 1500);
  });
}

export function mockFetchGetTeamInfos() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: teamInfo,
      });
    }, 1500);
  });
}
