import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const dataKelulusan = {
  "0099444084": { nama: "ABDUL HANNAN", status: "LULUS" },
  "0099957524": { nama: "ACH. DENI DWI SAPUTRA", status: "LULUS" },
  "0097075907": { nama: "ADELIA FEBRIYANTI", status: "LULUS" },
  "0094226240": { nama: "Ahmad Ali Fikri", status: "LULUS" },
  "0093508403": { nama: "ALVIN FARISKY NADHIF", status: "LULUS" },
  "0098297010": { nama: "Zahratul Farida", status: "LULUS" }
};

export default function KelulusanSMPN3() {
  const [step, setStep] = useState("sambutan");
  const [nisn, setNisn] = useState("");
  const [hasil, setHasil] = useState(null);

  const handleCekKelulusan = () => {
    const result = dataKelulusan[nisn];
    setHasil(result || { nama: "NISN tidak ditemukan", status: "" });
  };

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center p-4">
      {step === "sambutan" && (
        <Card className="max-w-2xl text-center">
          <CardContent className="p-6">
            <h1 className="text-3xl font-bold mb-4">Pengumuman Kelulusan</h1>
            <p className="text-lg mb-6">
              Selamat kepada seluruh Taruna/i SMPN 3 Situbondo yang telah menyelesaikan
              pendidikan selama 3 tahun. Semoga ilmu yang didapat menjadi bekal di
              jenjang selanjutnya.
            </p>
            <Button onClick={() => setStep("login")}>LOGIN</Button>
          </CardContent>
        </Card>
      )}

      {step === "login" && (
        <Card className="w-full max-w-md text-center">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Cek Kelulusan</h2>
            <Input
              placeholder="Masukkan NISN"
              value={nisn}
              onChange={(e) => setNisn(e.target.value)}
              className="mb-4"
            />
            <Button onClick={handleCekKelulusan}>CEK</Button>

            {hasil && (
              <div className="mt-6">
                <p className="text-xl font-bold">{hasil.nama}</p>
                <p className="text-lg mt-2">Keterangan: {hasil.status}</p>
                {hasil.status === "LULUS" && (
                  <p className="mt-4 text-sm text-green-700">
                    Bagi yang dinyatakan lulus, silahkan ambil Surat Keterangan Lulus di Ruang
                    Administrasi dengan berpakaian Rapi dan Sopan.
                  </p>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
