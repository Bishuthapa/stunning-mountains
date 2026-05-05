import { SmartImage } from "@/components/SmartImage"

export default function Home() {

  return (
    <>
      <div className="flex flex-col flex-1 items-center justify-center">
        <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 sm:items-start">
          <div>
            <SmartImage name="everest" loading="eager" />
          </div>
          <div>
            <SmartImage name="dhaulagiri" loading="eager" />
          </div>
          <div><SmartImage name="annapurna" loading="eager" /></div>
          <div><SmartImage name="himalchuli" loading="eager" /></div>
          <div><SmartImage name="kanachanjanga" loading="eager" /></div>
          <div><SmartImage name="lhotse" loading="eager" /></div>
          <div><SmartImage name="makalu" loading="eager" /></div>
          <div><SmartImage name="manaslu" loading="eager" /></div>
          <div><SmartImage name="yalungkhang" loading="eager" /></div>
        </main>
      </div>
    </>
  );
}
