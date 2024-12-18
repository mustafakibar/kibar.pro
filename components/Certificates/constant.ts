import { Certificate } from './type';

const LB_BLUR_HASH =
  'data:image/webp;base64,UklGRioCAABXRUJQVlA4WAoAAAAgAAAAFQAAEAAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggPAAAADADAJ0BKhYAEQA+7WSpTbOlo6IwCAJwHYlpAAB1jZOwvAAA/vC+8zjKaP2fUeaYenk8+ja4eiNEYo4AAA==';

const MEU_BLUR_HASH =
  'data:image/webp;base64,UklGRjwCAABXRUJQVlA4WAoAAAAgAAAAFQAAEAAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggTgAAAHAEAJ0BKhYAEQA+7WaqTamlpCIwCAEwHYlpAMAoGuIfq6L4jOC+8C1AB/yoAP7D2da5VPaMwkZMsvSaw3Q0+sQtHjNrDyPdj4JB7p0AAA==';

const FCC_BLUR_HASH =
  'data:image/webp;base64,UklGRjICAABXRUJQVlA4WAoAAAAgAAAAFQAAEAAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggRAAAABADAJ0BKhYAEQA+3VikTailI6I3+qgBEBuJaQAAdFX4IAD+70nPWlBDRfaeW+tc/dt/Tbrn6H+aZsTU4JCD27Y5uAAA';

const KU_BLUR_HASH =
  'data:image/webp;base64,UklGRjICAABXRUJQVlA4WAoAAAAgAAAAFQAAEAAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggRAAAABADAJ0BKhYAEQA+7WSoTamlo6IwCAEwHYlnAK4cKz2lAAD+7mXzOXr+mjxeZr/OQmiRQ8Al1w+cbn3hr43OjHLvlgAA';

const ITU_BLUR_HASH =
  'data:image/webp;base64,UklGRi4CAABXRUJQVlA4WAoAAAAgAAAAFQAAEAAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggQAAAAJADAJ0BKhYAEQA+5VymTaklI6IwDAEgHIlpAABSqOSXFa47W4AA/vOCz7srtzLdNsDhWZrOc6K6Tz13Lu5kAAA=';

const FU_BLUR_HASH =
  'data:image/webp;base64,UklGRjICAABXRUJQVlA4WAoAAAAgAAAAFQAAEAAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggRAAAADAEAJ0BKhYAEQA+7WKnTimlKCIwGAwBMB2JaQDQVBDws2uwSjc0+9wdAAD+5yh0645jEt7BXvv0CfWdhcKa/h+oAAAA';

const BTK_BLUR_HASH =
  'data:image/webp;base64,UklGRj4CAABXRUJQVlA4WAoAAAAgAAAAFQAAEAAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggUAAAANADAJ0BKhYAEQA+0VSiTagkoyI36AEAGglnAM44LWVbbb5TPMk9gAD+8ApbaZ/W4ANLZO0MFRxT4+SRd+BvmokoX4Mttim1DZXJRp4HAAAA';

const AU_BLUR_HASH =
  'data:image/webp;base64,UklGRjoCAABXRUJQVlA4WAoAAAAgAAAAFQAAEAAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggTAAAALADAJ0BKhYAEQA+7WKtUCmlJCKwGAgBMB2JZwDDrBDvppEQVRwAAP7tXbU8j8zcVU3JvabUBxebXa2bRMs/V7PFVmmhKSsWUKuAAAA=';

const KM_BLUR_HASH =
  'data:image/webp;base64,UklGRjICAABXRUJQVlA4WAoAAAAgAAAAFQAAEAAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggRAAAAJAEAJ0BKhYAEQA+7WKoTamlo6IwCAEwHYlnAMukHpBilR0pe8VqmzmjGGh9AAD+8eCguEnYmuC6HQ6BSvgBvcBWsMAA';

const CERTIFICATE_ITEMS: Certificate[] = [
  {
    title: 'Legacy Full Stack',
    description: 'FreeCodeCamp (~1800hours)',
    date: '2022',
    imageUrl: '/certificates/fcc_legacy_full_stack.webp',
    blurDataURL: FCC_BLUR_HASH,
  },
  {
    title: 'APIs and Microservices',
    description: 'FreeCodeCamp (~300hours)',
    date: '2021',
    imageUrl: '/certificates/fcc_apis_and_microservices.webp',
    blurDataURL: FCC_BLUR_HASH,
  },
  {
    title: 'Responsive Web Design',
    description: 'FreeCodeCamp (~300hours)',
    date: '2021',
    imageUrl: '/certificates/fcc_responsive_web_design.webp',
    blurDataURL: FCC_BLUR_HASH,
  },
  {
    title: 'JavaScript Algorithms and Data Structures',
    description: 'FreeCodeCamp (~300hours)',
    date: '2021',
    imageUrl:
      '/certificates/fcc_javascript_algorithms_and_data_structures.webp',
    blurDataURL: FCC_BLUR_HASH,
  },
  {
    title: 'Forensic Information Expertise',
    description: 'Firat University',
    date: '2021',
    imageUrl: '/certificates/fu_forensic.webp',
    blurDataURL: FU_BLUR_HASH,
  },
  {
    title: 'Huawei Coding Marathon',
    description: 'BTK Akademi & Huawei',
    date: '2021',
    imageUrl: '/certificates/btk_huawei_coding_marathon.webp',
    blurDataURL: BTK_BLUR_HASH,
  },
  {
    title: 'Huawei Mobile Services',
    description: 'BTK Akademi',
    date: '2021',
    imageUrl: '/certificates/btk_huawei_mobile_services.webp',
    blurDataURL: BTK_BLUR_HASH,
  },
  {
    title: 'Introduction to IT',
    description: 'BTK Akademi',
    date: '2021',
    imageUrl: '/certificates/btk_introduction_to_it.webp',
    blurDataURL: BTK_BLUR_HASH,
  },
  {
    title: 'JQuery Web Programming',
    description: 'BTK Akademi',
    date: '2021',
    imageUrl: '/certificates/btk_jquery_web_programming.webp',
    blurDataURL: BTK_BLUR_HASH,
  },
  {
    title: 'Algortihm Design',
    description: 'BTK Akademi',
    date: '2021',
    imageUrl: '/certificates/btk_algorithm_design.webp',
    blurDataURL: BTK_BLUR_HASH,
  },
  {
    title: 'Internet Security',
    description: 'BTK Akademi',
    date: '2021',
    imageUrl: '/certificates/btk_internet_security.webp',
    blurDataURL: BTK_BLUR_HASH,
  },
  {
    title: 'Android with Kotlin Advanced',
    description: 'BTK Akademi',
    date: '2021',
    imageUrl: '/certificates/btk_android_kotlin_advanced.webp',
    blurDataURL: BTK_BLUR_HASH,
  },
  {
    title: 'Pardus UI Usage',
    description: 'BTK Akademi',
    date: '2021',
    imageUrl: '/certificates/btk_pardus_ui_usage.webp',
    blurDataURL: BTK_BLUR_HASH,
  },
  {
    title: 'Domain Driven Design',
    description: 'Lightbend Academy',
    date: '2020',
    imageUrl: '/certificates/lb_domain_driven_design.webp',
    blurDataURL: LB_BLUR_HASH,
  },
  {
    title: 'Introduction To Reactive Systems',
    description: 'Lightbend Academy',
    date: '2020',
    imageUrl: '/certificates/lb_introduction_to_reactive_systems.webp',
    blurDataURL: LB_BLUR_HASH,
  },
  {
    title: 'Reactive Microservices',
    description: 'Lightbend Academy',
    date: '2020',
    imageUrl: '/certificates/lb_reactive_microservices.webp',
    blurDataURL: LB_BLUR_HASH,
  },
  {
    title: 'Akka Streams For Java Professional',
    description: 'Lightbend Academy',
    date: '2020',
    imageUrl: '/certificates/lb_akka_streams_for_java_professional.webp',
    blurDataURL: LB_BLUR_HASH,
  },
  {
    title: 'Akka Cluster Fundamentals',
    description: 'Lightbend Academy',
    date: '2020',
    imageUrl: '/certificates/lb_akka_cluster_fundamentals.webp',
    blurDataURL: LB_BLUR_HASH,
  },
  {
    title: 'Akka Cluster Sharding',
    description: 'Lightbend Academy',
    date: '2020',
    imageUrl: '/certificates/lb_akka_cluster_sharding.webp',
    blurDataURL: LB_BLUR_HASH,
  },
  {
    title: 'Cloudflow Principles',
    description: 'Lightbend Academy',
    date: '2020',
    imageUrl: '/certificates/lb_cloudflow_principles.webp',
    blurDataURL: LB_BLUR_HASH,
  },
  {
    title: 'Information Security For Employees',
    description: 'Ankara University',
    date: '2018',
    imageUrl: '/certificates/au_information_security_for_employees.webp',
    blurDataURL: AU_BLUR_HASH,
  },
  {
    title: 'Computer Management',
    description: 'Istanbul Technical University',
    date: '2018',
    imageUrl: '/certificates/itu_computer_management.webp',
    blurDataURL: ITU_BLUR_HASH,
  },
  {
    title: 'Drone Pilot(IHA-1)',
    description: 'Kapadokya University',
    date: '2018',
    imageUrl: '/certificates/ku_iha_1.webp',
    blurDataURL: KU_BLUR_HASH,
  },
  {
    title: 'Drone Pilot(IHA-0)',
    description: 'Kapadokya University',
    date: '2018',
    imageUrl: '/certificates/ku_iha_0.webp',
    blurDataURL: KU_BLUR_HASH,
  },

  {
    title: 'Data Mining',
    description: 'Middle East University',
    date: '2018',
    imageUrl: '/certificates/meu_data_mining.webp',
    blurDataURL: MEU_BLUR_HASH,
  },
  {
    title: 'Linux Operating System',
    description: 'Middle East University',
    date: '2018',
    imageUrl: '/certificates/meu_linux_operating_systems.webp',
    blurDataURL: MEU_BLUR_HASH,
  },
  {
    title: 'Android Deployment',
    description: 'Kariyer Mimari',
    date: '2014',
    imageUrl: '/certificates/km_android.webp',
    blurDataURL: KM_BLUR_HASH,
  },
];

export { CERTIFICATE_ITEMS };
