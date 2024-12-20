import Image from "next/image";

type FifthContentProps = {
  className: string;
};

export const FifthContent = (props: FifthContentProps) => {
  return (
    <div {...props}>
      <div className="w-4/6">
        <Image
          src={"/blobs/fifthcontent.svg"}
          width={400}
          height={400}
          alt=""
          className="mx-auto"
        />
      </div>
      <div className="w-1/2">
        <h1 className="text-7xl font-bold">LIVE TEXT EDITING</h1>
        <h2 className="text-2xl mt-4">
          Lorem ipsum odor amet, consectetuer adipiscing elit. Facilisi
          facilisis ornare tortor nullam at bibendum aliquet
          quisque.Pellentesque cursus lobortis bibendum bibendum egestas iaculis
          nostra? Ante felis accumsan accumsan luctus maximus mus congue rhoncus
          accumsan.
        </h2>
      </div>
    </div>
  );
};
