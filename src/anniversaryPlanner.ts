// Day-by-day activity planner for the 20th anniversary (November 2026).
// Same `_en` suffix convention as the content collections; Spanish is the fallback.
export interface PlannerDay {
  day: number;
  title: string;
  title_en: string;
  text: string;
  text_en: string;
  highlight?: boolean;
  closed?: boolean;
}

export interface PlannerWeek {
  key: "week1" | "week2";
  days: PlannerDay[];
}

export const plannerWeeks: PlannerWeek[] = [
  {
    key: "week1",
    days: [
      {
        day: 9,
        title: "¡Comienzan las celebraciones!",
        title_en: "The celebrations begin!",
        text: "Arrancan nuestras promociones especiales y sorteos por compras de laboratorios colaboradores. Los más pequeños ya pueden traer su dibujo de la farmacia para participar en el sorteo de 3 Abejonejos.",
        text_en: "Our special promotions and raffles for purchases from partner laboratories start today. The little ones can already bring their drawing of the pharmacy to enter the raffle for 3 Abejonejos.",
      },
      {
        day: 10,
        title: "Descubre tu fuerza muscular",
        title_en: "Discover your muscle strength",
        text: "Jornada de medición de fuerza con dinamómetro Meritene. Una prueba sencilla para concienciar sobre la importancia de mantener nuestra musculatura. Con cita previa cada 15 minutos.",
        text_en: "Strength measurement day with a Meritene dynamometer. A simple test to raise awareness of the importance of keeping our muscles healthy. By appointment, every 15 minutes.",
      },
      {
        day: 11,
        title: "Degustación Meritene",
        title_en: "Meritene tasting",
        text: "Ven a descubrir y probar productos Meritene. Hablaremos sobre nutrición, energía y mantenimiento de la masa muscular. Entrega de muestras.",
        text_en: "Come and try Meritene products. We will talk about nutrition, energy and maintaining muscle mass. Samples included.",
      },
      {
        day: 12,
        title: "Seguimos celebrando",
        title_en: "The celebration continues",
        text: "Continúan las promociones, los sorteos y la recogida de dibujos infantiles para nuestro aniversario.",
        text_en: "Promotions, raffles and the collection of children's drawings for our anniversary continue.",
      },
      {
        day: 13,
        title: "Degustación ProtiAdvance",
        title_en: "ProtiAdvance tasting",
        text: "Prueba sus productos y descubre la importancia de las proteínas en el deporte, las dietas de adelgazamiento y los tratamientos con GLP-1.",
        text_en: "Try their products and discover the importance of protein in sport, weight-loss diets and GLP-1 treatments.",
      },
      {
        day: 14,
        title: "Día Mundial de la Diabetes",
        title_en: "World Diabetes Day",
        text: "Consejos de alimentación, control de glucemia y cuidado de la piel. Material educativo y entrega de muestras hidratantes de Eucerin, ISDIN y Sebamed.",
        text_en: "Advice on nutrition, blood glucose control and skin care. Educational material and moisturizer samples from Eucerin, ISDIN and Sebamed.",
      },
      {
        day: 15,
        title: "Domingo",
        title_en: "Sunday",
        text: "Sin actividad programada.",
        text_en: "No activity scheduled.",
        closed: true,
      },
    ],
  },
  {
    key: "week2",
    days: [
      {
        day: 16,
        title: "El sol también está en invierno",
        title_en: "The sun is out in winter too",
        text: "Jornada de concienciación sobre la fotoprotección durante todo el año. Prueba de texturas y fotomaquillaje, con muestras Heliocare y Eucerin Solar.",
        text_en: "Awareness day about year-round sun protection. Texture testing and photo make-up, with Heliocare and Eucerin Sun samples.",
      },
      {
        day: 17,
        title: "Cuida tu cabello",
        title_en: "Take care of your hair",
        text: "Consejos para mantener un cabello y cuero cabelludo saludables, prevenir problemas frecuentes y conocer las rutinas de cuidado capilar. Muestras Iraltone.",
        text_en: "Tips for keeping hair and scalp healthy, preventing common problems and learning hair care routines. Iraltone samples.",
      },
      {
        day: 18,
        title: "Sonríe con salud",
        title_en: "Smile with health",
        text: "Jornada dedicada a la higiene bucodental: cepillado, cuidado de las encías y prevención de problemas dentales. Entrega de muestras Bexident.",
        text_en: "A day dedicated to oral hygiene: brushing, gum care and prevention of dental problems. Bexident samples.",
      },
      {
        day: 19,
        title: "¡Gran fiesta del 20.º aniversario!",
        title_en: "The big 20th anniversary party!",
        text: "Nuestro día más especial, de 9:00 a 21:00 h. Regalos conmemorativos, catering, photocall, realización de los sorteos y muchas sorpresas para agradecer estos 20 años juntos.",
        text_en: "Our most special day, from 9:00 to 21:00. Commemorative gifts, catering, photocall, the raffle draws and many surprises to thank you for these 20 years together.",
        highlight: true,
      },
    ],
  },
];
