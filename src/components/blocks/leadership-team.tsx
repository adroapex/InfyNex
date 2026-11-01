import Image from "next/image";

const leadershipTeam = [
  {
    name: "Dada Nevase",
    company: "Chairman",
    image: "/leadership-team/3.webp",
  },
  {
    name: "Vaibhav Nevase",
    company: "Founder & CEO",
    image: "/leadership-team/4.webp",
  },
  // {
  //   name: "Suyash Dabade",
  //   company: "VP Manufacturing",
  //   image: "/leadership-team/4.webp",
  // },
  // {
  //   name: "Satish Nevase",
  //   company: "VP Operations",
  //   image: "/leadership-team/4.webp",
  // },
  // {
  //   name: "Prathamesh Patil",
  //   company: "VP Sourcing",
  //   image: "/leadership-team/4.webp",
  // },
];

export function LeadershipTeam() {
  return (
    <section className="container max-w-5xl py-12">
      <h2 className="text-foreground text-4xl font-medium tracking-wide">
        Leadership Team
      </h2>
      <div className="mt-8 grid grid-cols-2 gap-12 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {leadershipTeam.map((member) => (
          <div key={member.name} className="">
            <Image
              src={member.image}
              alt={member.name}
              width={120}
              height={120}
              className="object-cover"
            />
            <h3 className="mt-3 font-semibold">{member.name}</h3>
            <p className="text-muted-foreground">{member.company}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
