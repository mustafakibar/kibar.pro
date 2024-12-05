import { CertificateItemProps } from './type';

const CERTIFICATE_ITEMS: CertificateItemProps[] = [
  {
    title: 'Legacy Full Stack',
    description: 'FreeCodeCamp (~1800hours)',
    imageUrl: '/certificates/fcc-legacy-full-stack.webp',
    blurDataURL:
      'data:image/webp;base64,UklGRlICAABXRUJQVlA4WAoAAAAgAAAAfgAAYgAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggZAAAANAGAJ0BKn8AYwA+7Xa2VimnJKOgqAEwHYlpbt/1cKf6AY21SttMuxVQDHoub4yjyZfwn/YDWRPnz2s6MzGyAAD+7o2TbrO9DC0y9JHiACYHgxn5cHBKIiNLj3lRu+yI1tAAAAA=',
    date: '2022',
  },
  {
    title: 'APIs and Microservices',
    description: 'FreeCodeCamp (~300hours)',
    imageUrl: '/certificates/fcc-apis-and-microservices.webp',
    blurDataURL:
      'data:image/webp;base64,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',
    date: '2021',
  },
  {
    title: 'Responsive Web Design',
    description: 'FreeCodeCamp (~300hours)',
    imageUrl: '/certificates/fcc-responsive-web-design.webp',
    blurDataURL:
      'data:image/webp;base64,UklGRrIHAABXRUJQVlA4WAoAAAAgAAAAegIA6wEASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggxAUAAJBrAJ0BKnsC7AE+7XazVa0zqqMhNAlCcB2JaW7gdQ0anCVh9+bVJIihsD4x7gCgonw4s75RPhxcH76x+VJ4/byQ9pkOLSrzgUT4cWq5S1RZlBuqWjU7VpRvrdnzQlli6vNWu3EkHN6cB4dSLV8zPlHa42llNn6Jf4EbqRyuwDduteAnvVqx3oG1uYyOqWjUjrXe371kdzS+FFButdstef3A+Etdu+fKxeRX4iZebXcGnNVLQ+EnuQYvtb5WI614Cg3WvAUG6yYCgyjbeTa7g1I614Cg3WvAUG614CrTuDUjrJgXG7vu0Zv64RX5LKwFCiAPbv5LDwFBldd/7TrXe4DK68BQbrXgLPlBC81FnGDWfjd8Ir8BeTK/D4eRX4fXCLzwZBKmFb6izjIJUwroaN26GiIdeAoN1rwFBwqPDiG4IWVvRp9b6izU4JUwrna9fEdzS13BqR1rzrC6yt6NPrfUZJ+os4yCVMK31GQGPMiddwakda8BQbo4obghZW9GnvYUwrfUSgZBKqvskbXbc8614Cg3Wwf1FnGQSpTSA3Z7gNNPrM0WcZBKmG+Etd3eT4INSQqO8M4yCVMKFIDdnXUM0T8r9YDPcXPuPqLOdgn65goN1rwFCh6srejT63dnXUM1XO1xI8/oZSZukB7D59cnDQfCM2DMivxB7mXaUNu2ddQzpCCk142xEBHIejjMFGz2UZgx+AvhA/MAV2lCrOuu6DIKmrIzFW4GUJIvo5a7gfATPT4P94YCQ9GlXIcWd9CXh4TWubOm/IyL6tXoU5Q2/6o1PIKmrH1tCf8MwLBu5MBOsTfIz96IqrGieyqMVyHFmyAq3wq9GV4fH63y1l0DIhZ6UKs7fVJK3jt6ODSA9omAEOXAhXa+TS6ddLKDZnpMtp9DAvQSuwrQIbp3xeaKSHyff9G+uEV8nqbzhZkctAsWhZA2+CcjnuAulKQDXs+wtcsh8Vvfht4fi7azZ3KDSjVks49nUM72i0mrr+luJTdDQ9WLrTU4wKDhPvh3x7VSvw1IFtd/3nFJLyKXIdoyZ4CcozvkwAxDlwiuJ1vqGHFnfKMuWiOEe2FWGGg3SNiQqOJIwgXH18dvrkQL78EgE1WAnAVdWdHaLXRkWKTvs/3GBMWiOEeaqKAlQwwKMS+zCTIAAP7rWxi89zRwsTkLn8MxriLFhzWyYl7ZRscr/ldoteVW6kjRF269BPaJOiSIgVfZCPFBad7pXWujkpwMVU1LTQR7ghhH9mew+KIRd5vu+yjCmFyrLNdAG1GGzNEYpqzaWNWO2ujb6bMH4dFz5M69iPzB4oUI5dl6FuA0oIQj74sfuhjCS+KxqX8uoMHjEblSmIJzDHANt/Hk/pnv5HW/LI3HyiR2LbMhAlvumITmZArYoc2iOeoy+AnC7dEgurwUrW+TjFSV2RWY9pX7gMLVvUU8m49Wjw5bxDw8ZZYJWvEm8HmhAvtmhb4aChgHRIPS2P2F/RbDxdLXldW2sxNV+ZtLSektD4zdn34OiM+ei3HGk452fTHpCI+kywBJ20ui/2YZh+cCGgqJg2UCCskNvdt4DuTxtiLTTXqFdAlsxOA5FYybyi352jl1OeZAfO409ujtEGBzgSA3dpf3tqJdbU/mkYt7AidyUwLtl69K+2eUQfXw8dt9ofHv3g2TEowHT/ZfqpALnFz8vUTxr+NbMjKc/Q1BdoBB3AeenQmXINatygHMqqhwjiGTuEBHvJnpSkNMX2k0q55jmS6iUO+9wCCE5a8n2AsCxPT38+/L/6KmpWeV/gMeH65tNJn6SnzXYGXyPdWC1dzMY71pq85BtFE1JKAm3YTxctjqAABe5Ro8XoHXruzp1HZtOTPtcU0bEel6P9mIdeMrTzyEdHC17JrCG4aZcJdDI66pvcoUc/qv9Wqg8gQJ3uxIWovtAAOh0FNNpdDJVMjaoh1ceWvEtcKkdCBNW3HxZz6d6BAAAA==',
    date: '2021',
  },
  {
    title: 'JavaScript Algorithms and Data Structures',
    description: 'FreeCodeCamp (~300hours)',
    imageUrl: '/certificates/fcc-javascript-algorithms.webp',
    blurDataURL:
      'data:image/webp;base64,UklGRmACAABXRUJQVlA4WAoAAAAgAAAAfgAAYgAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggcgAAANAGAJ0BKn8AYwA+7Xa2VimnJKOgqAEwHYlpbt1feqvgB3ReV/rChnorD0F4zOqW6gENvgNi+Lsoo8DpYXNO6AD+7ryaoCvcBf9Fo1+ooKHOs5MYEPoCSQYoygtwxToo5UKnQmhZMDeJ2yem1OIUpwAAAA==',
    date: '2021',
  },
  {
    title: 'Forensic Information Expertise',
    description: 'Firat University',
    imageUrl: '/certificates/forensic-information-expertise.webp',
    date: '2021',
  },
  {
    title: 'Reactive Microservices',
    description: 'Lightbend Academy',
    imageUrl: '/certificates/lb-reactive-microservices.webp',
    blurDataURL:
      'data:image/webp;base64,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',
    date: '2020',
  },
  {
    title: 'Cloudflow Principles',
    description: 'Lightbend Academy',
    imageUrl: '/certificates/lb-cloudflow-principles.webp',
    blurDataURL:
      'data:image/webp;base64,UklGRv4HAABXRUJQVlA4WAoAAAAgAAAAegIA6gEASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggEAYAAPB2AJ0BKnsC6wE+7XawVK0zqiMilBpycB2JaW7gdfqo/d3f6kbHw+tJ8gGNNXm73k1cMasBAK7ry6LG73k1cMawbrPwLG73lRo7I2075nQEOjFdQNzfshI3KXzz8uOGQKWNveA/3vBCoY+UN7+AZkba8m0MfKt9/AMyNtcujP0RKjWpFujW+/gGZG2vJtDHyrffv/QjbFEBOKJUa1EqQQyNtfAQ6WPkQ9/AMyNqLAQ52RrUSo1qJUa1EtjfwDMjbXwB1C+egEU+eOgELm8B/veA/3vAf73gQMOXghUMeucfmRtr3/FOyNaiVGtRKjWolRrUS5aX5GOFzeCFMS29WDq53u9pT/e8B/veA/3vAf73gP97wXYiVGtRKbZRLXRJ7x/Dl4D/e8B/veA/3aHDoOIsiRjhc3gP97wGr7wQZfkZAp4EY4XN4D/e8BE6Dh0GQ9D0PPYZ5ofv+6MIAuxEglACyNaclGtRKjWolRrUSjJSySlkkSxLSxkBkD/EHSmUN6pjTVbIeDmfowfnnExja/Y4XN4D/e8B/veA/3uvKsLRfdm4WrPMSoRSLNP2YFomMFxwb1m2fsCd4D/e8B/veA/3vAf7tDh0GQ9D5Kjjs4cMcFPOhjPtaQFka1EqFSiVGtRKjWpamsr9D0SpobwnnnAcl9GcMNASMjHDx8jIFPAjHEhEBJaAAgEF++egEgTdL5NiWWAxSx9KMd2mqM/REqNZhz0WOJYYHJfJsSyw/Am98q46Ah0sfSeMvyMaX7x2AXQghD6DavN3vJtVOAQ6WPlW+/eqKKRZyHno0iC3e8mrhjV5uuLf2yJFM65/rr47Fl+hxbveTVwxq84nW0h0sfKg5YinwrYRFLHIJkKxqZ+3XDGrzd7ya2/Wb4CHSxuheYBikH1qVnoXboYQeUHGSJGAccMbGla+Ah0se2Q5YNAgnnhIzCMnjrM904lbIkYBxrmlklNH5/gGZG2vgIdLHyoKgF0hp8EfT7JEjALFoAFn0H9p7uQ9AIp85Ezw47PjENZAsFLDeVeD6sOEdy+a2gAT9p5O6SXoJz0Ainzx0BDpY+VbJspgzWHDplb9VhYh0cxOUY5hzfS+nFQx8q338AzHph78KQ1IZEH9gtru9pPWYlI1tfokhG2vijNr9/6D07SF2xv3rRhkhGxO94EDKt9+ixeB/BU+eOgG5a0VdJ7+AZkba+Ah0sfKt7DVWyYqcvbveQB1GIiAt6Sq306M63RrffwDMjS5OhsTQOIN98OVZvv+cEr7DObnP+XNiYNrAAD+8KSDPTOfpAcrdA2j/wJfPHc0FA0FAsNYdEbfKKTGEo03+TRUQY2211vdJ+nCKdA/vznwCZg3jDMl2RDqtu2i1q3QhTl48DewXTWAAE3ZvmUGEgaNnfmaXXogENc8semnkClsGkgPMGYLFHN7BgC49+9F1zwJJMVb72FyAdk2SguNY9ohxdu0ikLEmd0212Rki/lco6FaSOcUzDfS6p+ejGOqAQwQvZpSITypbJV08cfGMSsVZhPSdLy6aUv4GLooQc2eJGQb9sixkHl3Le7aUMexpd4EAscqyNzqbUjBKHakHA34DnbfGTEUm1NF9yCUMz0/ouR9XQxKJo+BcpNZXLc7n0tzO/2DLkcfkp3R9AipFbKHFqOXCAg8yJ+QK2dJv2AlcnaUk5AinKOFJB6dqgXgZZquBnURRcmK8NU+BFOfZZkzBlFgA0xKenkSyCVo6TbLMfvZ2QJScECH9uyBaeZIhQGV9YSq2f5aJcAXQF5+pxRWPZ2fwKbqNhQyvAC14S8tFnCHbRt18CDDanKEWHr7moERzbYNVu1pF83OYXIUiUTDDGv+zdUeGrs4BCeGQBFq0/oN0n9smONkDduvtPoe4i96bbELz6M184JRH7t04rPtymjbPsHdrBT70Z3k1vtoV0XQ7OAmV1nOS1yZ7GH5sDAsttTv3NpWe7ADtlXWpRgFqcE+nprcvL8EmDgwo+Xh9m6sxReq/i7AUbW8gT23WwapJUz03lYGDirrZkAYjUpqVPilpysHoAts9yVQ0IzlW/RHB6+fBNsAAAA=',
    date: '2020',
  },
  {
    title: 'Domain Driven Design',
    description: 'Lightbend Academy',
    imageUrl: '/certificates/lb-domain-driven-design.webp',
    blurDataURL:
      'data:image/webp;base64,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',
    date: '2020',
  },
  {
    title: 'Amateur Radio - A Class',
    description: 'Directorate General of Coastal Safety',
    imageUrl: '/certificates/amateur-radio-a-class.webp',
    date: '2019',
  },
  {
    title: 'Computer Management',
    description: 'Yildiz Technical University',
    imageUrl: '/certificates/computer-management.webp',
    blurDataURL:
      'data:image/webp;base64,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',
    date: '2018',
  },
  {
    title: 'Data Mining',
    description: 'Middle East University',
    imageUrl: '/certificates/data-mining.webp',
    date: '2018',
  },
  {
    title: 'Linux Operating System',
    description: 'Middle East University',
    imageUrl: '/certificates/linux-operating-system.webp',
    date: '2018',
  },
  {
    title: 'Information Security For Employees',
    description: 'Ankara University',
    imageUrl: '/certificates/information-security-for-employees.webp',
    blurDataURL:
      'data:image/webp;base64,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',
    date: '2018',
  },
  {
    title: 'Drone Pilot',
    description: 'Kapadokya University',
    imageUrl: '/certificates/drone.webp',
    date: '2018',
  },
  {
    title: 'Android Deployment',
    description: 'Kariyer Mimari',
    imageUrl: '/certificates/android.webp',
    date: '2014',
  },
];

export { CERTIFICATE_ITEMS };
