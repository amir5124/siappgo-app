function flightApp() {
    const urlParams = new URLSearchParams(window.location.search);
    const usernameDitemukan = urlParams.get('username') || window.dataJagel?.username || 'Guest';
    const detectedDeposit = urlParams.get('deposit') || 'https://jgjk.mobi/m/6879ab2a8cd9b';

    const now = new Date();
    const todayRef = new Date(now);
    todayRef.setHours(0, 0, 0, 0);

    const tomorrow = new Date(todayRef);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const yyyy = tomorrow.getFullYear();
    const mm = String(tomorrow.getMonth() + 1).padStart(2, '0');
    const dd = String(tomorrow.getDate()).padStart(2, '0');

    const defaultDepartDate = `${yyyy}-${mm}-${dd}`;
    const defaultDepartLabel = tomorrow.toLocaleDateString('id-ID', {
        day: '2-digit', month: 'short', year: 'numeric'
    });

    const localRouteData = {
        "routes": [
            { "origin": "ADL", "destination": "ADL", "originName": "Australia, Adelaide (ADL)", "destinationName": "Australia, Adelaide (ADL)" },
            { "origin": "ADL", "destination": "CTU", "originName": "Australia, Adelaide (ADL)", "destinationName": "China, Chengdu (CTU)" },
            { "origin": "ADL", "destination": "KMG", "originName": "Australia, Adelaide (ADL)", "destinationName": "China, Kunming (KMG)" },
            { "origin": "ADL", "destination": "DPS", "originName": "Australia, Adelaide (ADL)", "destinationName": "Indonesia, Denpasar, Bali (DPS)" },
            { "origin": "ADL", "destination": "CGK", "originName": "Australia, Adelaide (ADL)", "destinationName": "Indonesia, Jakarta,Soekarno Hatta (CGK)" },
            { "origin": "ADL", "destination": "LBU", "originName": "Australia, Adelaide (ADL)", "destinationName": "Malaysia, Labuan (LBU)" },
            { "origin": "OOL", "destination": "MEL", "originName": "Australia, GoldCoast (OOL)", "destinationName": "Australia, Melbourne (MEL)" },
            { "origin": "OOL", "destination": "PER", "originName": "Australia, GoldCoast (OOL)", "destinationName": "Australia, Perth (PER)" },
            { "origin": "OOL", "destination": "BWN", "originName": "Australia, GoldCoast (OOL)", "destinationName": "Brunei, Brunei (BWN)" },
            { "origin": "OOL", "destination": "COK", "originName": "Australia, GoldCoast (OOL)", "destinationName": "India, Kochi (COK)" },
            { "origin": "OOL", "destination": "BDJ", "originName": "Australia, GoldCoast (OOL)", "destinationName": "Indonesia, Banjarmasin (BDJ)" },
            { "origin": "OOL", "destination": "HLP", "originName": "Australia, GoldCoast (OOL)", "destinationName": "Indonesia, Jakarta,Halim Perdanakusuma (HLP)" },
            { "origin": "OOL", "destination": "KCH", "originName": "Australia, GoldCoast (OOL)", "destinationName": "Malaysia, Kuching (KCH)" },
            { "origin": "MEL", "destination": "PER", "originName": "Australia, Melbourne (MEL)", "destinationName": "Australia, Perth (PER)" },
            { "origin": "MEL", "destination": "MES", "originName": "Australia, Melbourne (MEL)", "destinationName": "Indonesia, Medan (MES)" },
            { "origin": "PER", "destination": "BWN", "originName": "Australia, Perth (PER)", "destinationName": "Brunei, Brunei (BWN)" },
            { "origin": "PER", "destination": "CGK", "originName": "Australia, Perth (PER)", "destinationName": "Indonesia, Jakarta,Soekarno Hatta (CGK)" },
            { "origin": "SYD", "destination": "PEK", "originName": "Australia, Sydney (SYD)", "destinationName": "China, Beijing (PEK)" },
            { "origin": "BWN", "destination": "REP", "originName": "Brunei, Brunei (BWN)", "destinationName": "Cambodia, Siem Reap (REP)" },
            { "origin": "CTU", "destination": "CTU", "originName": "China, Chengdu (CTU)", "destinationName": "China, Chengdu (CTU)" },
            { "origin": "CTU", "destination": "KMG", "originName": "China, Chengdu (CTU)", "destinationName": "China, Kunming (KMG)" },
            { "origin": "BLR", "destination": "SYD", "originName": "India, Bangalore (BLR)", "destinationName": "Australia, Sydney (SYD)" },
            { "origin": "BLR", "destination": "ARD", "originName": "India, Bangalore (BLR)", "destinationName": "Indonesia, Alor Island (ARD)" },
            { "origin": "BLR", "destination": "LBU", "originName": "India, Bangalore (BLR)", "destinationName": "Malaysia, Labuan (LBU)" },
            { "origin": "COK", "destination": "ARD", "originName": "India, Kochi (COK)", "destinationName": "Indonesia, Alor Island (ARD)" },
            { "origin": "COK", "destination": "SUB", "originName": "India, Kochi (COK)", "destinationName": "Indonesia, Surabaya1 (SUB)" },
            { "origin": "AEK", "destination": "AEK", "originName": "Indonesia, Aek Godang (AEK)", "destinationName": "Indonesia, Aek Godang (AEK)" },
            { "origin": "AEK", "destination": "AHI", "originName": "Indonesia, Aek Godang (AEK)", "destinationName": "Indonesia, Amahai, West Papua (AHI)" },
            { "origin": "AEK", "destination": "AMQ", "originName": "Indonesia, Aek Godang (AEK)", "destinationName": "Indonesia, Ambon (AMQ)" },
            { "origin": "AEK", "destination": "BPN", "originName": "Indonesia, Aek Godang (AEK)", "destinationName": "Indonesia, Balikpapan (BPN)" },
            { "origin": "AEK", "destination": "TKG", "originName": "Indonesia, Aek Godang (AEK)", "destinationName": "Indonesia, Bandar Lampung, Lampung (TKG)" },
            { "origin": "AEK", "destination": "BJG", "originName": "Indonesia, Aek Godang (AEK)", "destinationName": "Indonesia, Bolaang (BJG)" },
            { "origin": "AEK", "destination": "CGK", "originName": "Indonesia, Aek Godang (AEK)", "destinationName": "Indonesia, Jakarta,Soekarno Hatta (CGK)" },
            { "origin": "ARD", "destination": "ARD", "originName": "Indonesia, Alor Island (ARD)", "destinationName": "Indonesia, Alor Island (ARD)" },
            { "origin": "ARD", "destination": "AMQ", "originName": "Indonesia, Alor Island (ARD)", "destinationName": "Indonesia, Ambon (AMQ)" },
            { "origin": "ARD", "destination": "CGK", "originName": "Indonesia, Alor Island (ARD)", "destinationName": "Indonesia, Jakarta,Soekarno Hatta (CGK)" },
            { "origin": "ARD", "destination": "SUB", "originName": "Indonesia, Alor Island (ARD)", "destinationName": "Indonesia, Surabaya1 (SUB)" },
            { "origin": "AMQ", "destination": "AAS", "originName": "Indonesia, Ambon (AMQ)", "destinationName": "Indonesia, Apalapsili (AAS)" },
            { "origin": "AMQ", "destination": "BPN", "originName": "Indonesia, Ambon (AMQ)", "destinationName": "Indonesia, Balikpapan (BPN)" },
            { "origin": "AMQ", "destination": "TKG", "originName": "Indonesia, Ambon (AMQ)", "destinationName": "Indonesia, Bandar Lampung, Lampung (TKG)" },
            { "origin": "AMQ", "destination": "CGK", "originName": "Indonesia, Ambon (AMQ)", "destinationName": "Indonesia, Jakarta,Soekarno Hatta (CGK)" },
            { "origin": "AMQ", "destination": "KNG", "originName": "Indonesia, Ambon (AMQ)", "destinationName": "Indonesia, Kaimana (KNG)" },
            { "origin": "AMQ", "destination": "SUB", "originName": "Indonesia, Ambon (AMQ)", "destinationName": "Indonesia, Surabaya1 (SUB)" },
            { "origin": "AGD", "destination": "AGD", "originName": "Indonesia, Anggi (AGD)", "destinationName": "Indonesia, Anggi (AGD)" },
            { "origin": "AAS", "destination": "AMQ", "originName": "Indonesia, Apalapsili (AAS)", "destinationName": "Indonesia, Ambon (AMQ)" },
            { "origin": "AAS", "destination": "BDJ", "originName": "Indonesia, Apalapsili (AAS)", "destinationName": "Indonesia, Banjarmasin (BDJ)" },
            { "origin": "AAS", "destination": "CGK", "originName": "Indonesia, Apalapsili (AAS)", "destinationName": "Indonesia, Jakarta,Soekarno Hatta (CGK)" },
            { "origin": "ABU", "destination": "ARD", "originName": "Indonesia, Atambua (ABU)", "destinationName": "Indonesia, Alor Island (ARD)" },
            { "origin": "ABU", "destination": "AGD", "originName": "Indonesia, Atambua (ABU)", "destinationName": "Indonesia, Anggi (AGD)" },
            { "origin": "ABU", "destination": "MLG", "originName": "Indonesia, Atambua (ABU)", "destinationName": "Indonesia, Malang, Jawa Timur (MLG)" },
            { "origin": "ABU", "destination": "AEG", "originName": "Indonesia, Atambua (ABU)", "destinationName": "Indonesia, Padang Sidempuan (AEG)" },
            { "origin": "AYW", "destination": "CGK", "originName": "Indonesia, Ayawasi (AYW)", "destinationName": "Indonesia, Jakarta,Soekarno Hatta (CGK)" },
            { "origin": "BPN", "destination": "BTJ", "originName": "Indonesia, Balikpapan (BPN)", "destinationName": "Indonesia, Banda Aceh, Aceh (BTJ)" },
            { "origin": "BPN", "destination": "BTH", "originName": "Indonesia, Balikpapan (BPN)", "destinationName": "Indonesia, Batam (BTH)" },
            { "origin": "BPN", "destination": "BKS", "originName": "Indonesia, Balikpapan (BPN)", "destinationName": "Indonesia, Bengkulu (BKS)" },
            { "origin": "BPN", "destination": "DPS", "originName": "Indonesia, Balikpapan (BPN)", "destinationName": "Indonesia, Denpasar, Bali (DPS)" },
            { "origin": "BPN", "destination": "CGK", "originName": "Indonesia, Balikpapan (BPN)", "destinationName": "Indonesia, Jakarta,Soekarno Hatta (CGK)" },
            { "origin": "BPN", "destination": "DJB", "originName": "Indonesia, Balikpapan (BPN)", "destinationName": "Indonesia, Jambi, Paalmerah Airport (DJB)" },
            { "origin": "BPN", "destination": "KOE", "originName": "Indonesia, Balikpapan (BPN)", "destinationName": "Indonesia, Kupang (KOE)" },
            { "origin": "BPN", "destination": "LOP", "originName": "Indonesia, Balikpapan (BPN)", "destinationName": "Indonesia, Lombok, Mataram Nusa Tenggara (LOP)" },
            { "origin": "BPN", "destination": "MDC", "originName": "Indonesia, Balikpapan (BPN)", "destinationName": "Indonesia, Manado, Sulawesi Utara (MDC)" },
            { "origin": "BPN", "destination": "KNO", "originName": "Indonesia, Balikpapan (BPN)", "destinationName": "Indonesia, Medan , Kuala Namo (KNO)" },
            { "origin": "BPN", "destination": "PDG", "originName": "Indonesia, Balikpapan (BPN)", "destinationName": "Indonesia, Padang (PDG)" },
            { "origin": "BPN", "destination": "PGK", "originName": "Indonesia, Balikpapan (BPN)", "destinationName": "Indonesia, Pangkal Pinang, Bangka-Belitung (PGK)" },
            { "origin": "BPN", "destination": "PKU", "originName": "Indonesia, Balikpapan (BPN)", "destinationName": "Indonesia, Pekan Baru, Riau (PKU)" },
            { "origin": "BPN", "destination": "SUB", "originName": "Indonesia, Balikpapan (BPN)", "destinationName": "Indonesia, Surabaya1 (SUB)" },
            { "origin": "BPN", "destination": "TJQ", "originName": "Indonesia, Balikpapan (BPN)", "destinationName": "Indonesia, Tanjung Pandan (TJQ)" },
            { "origin": "BPN", "destination": "UPG", "originName": "Indonesia, Balikpapan (BPN)", "destinationName": "Indonesia, Ujungpandang (UPG)" },
            { "origin": "BPN", "destination": "JOG", "originName": "Indonesia, Balikpapan (BPN)", "destinationName": "Indonesia, Yogyakarta (JOG)" },
            { "origin": "BTJ", "destination": "BPN", "originName": "Indonesia, Banda Aceh, Aceh (BTJ)", "destinationName": "Indonesia, Balikpapan (BPN)" },
            { "origin": "BTJ", "destination": "CGK", "originName": "Indonesia, Banda Aceh, Aceh (BTJ)", "destinationName": "Indonesia, Jakarta,Soekarno Hatta (CGK)" },
            { "origin": "BTJ", "destination": "LBJ", "originName": "Indonesia, Banda Aceh, Aceh (BTJ)", "destinationName": "Indonesia, Labuhan Bajo (LBJ)" },
            { "origin": "BTJ", "destination": "SUB", "originName": "Indonesia, Banda Aceh, Aceh (BTJ)", "destinationName": "Indonesia, Surabaya1 (SUB)" },
            { "origin": "TKG", "destination": "CGK", "originName": "Indonesia, Bandar Lampung, Lampung (TKG)", "destinationName": "Indonesia, Jakarta,Soekarno Hatta (CGK)" },
            { "origin": "BDO", "destination": "SZX", "originName": "Indonesia, Bandung (BDO)", "destinationName": "China, Shenzhen (SZX)" },
            { "origin": "BDO", "destination": "BPN", "originName": "Indonesia, Bandung (BDO)", "destinationName": "Indonesia, Balikpapan (BPN)" },
            { "origin": "BDO", "destination": "BDO", "originName": "Indonesia, Bandung (BDO)", "destinationName": "Indonesia, Bandung (BDO)" },
            { "origin": "BDO", "destination": "BDJ", "originName": "Indonesia, Bandung (BDO)", "destinationName": "Indonesia, Banjarmasin (BDJ)" },
            { "origin": "BDO", "destination": "DQJ", "originName": "Indonesia, Bandung (BDO)", "destinationName": "Indonesia, Banyuwangi (DQJ)" },
            { "origin": "BDO", "destination": "DPS", "originName": "Indonesia, Bandung (BDO)", "destinationName": "Indonesia, Denpasar, Bali (DPS)" },
            { "origin": "BDO", "destination": "DOB", "originName": "Indonesia, Bandung (BDO)", "destinationName": "Indonesia, Dobo (DOB)" },
            { "origin": "BDO", "destination": "HLP", "originName": "Indonesia, Bandung (BDO)", "destinationName": "Indonesia, Jakarta,Halim Perdanakusuma (HLP)" },
            { "origin": "BDO", "destination": "CGK", "originName": "Indonesia, Bandung (BDO)", "destinationName": "Indonesia, Jakarta,Soekarno Hatta (CGK)" },
            { "origin": "BDO", "destination": "KNO", "originName": "Indonesia, Bandung (BDO)", "destinationName": "Indonesia, Medan , Kuala Namo (KNO)" },
            { "origin": "BDO", "destination": "SOC", "originName": "Indonesia, Bandung (BDO)", "destinationName": "Indonesia, Solo (SOC)" },
            { "origin": "BDO", "destination": "SUB", "originName": "Indonesia, Bandung (BDO)", "destinationName": "Indonesia, Surabaya1 (SUB)" },
            { "origin": "BDJ", "destination": "BDO", "originName": "Indonesia, Banjarmasin (BDJ)", "destinationName": "Indonesia, Bandung (BDO)" },
            { "origin": "BDJ", "destination": "BDJ", "originName": "Indonesia, Banjarmasin (BDJ)", "destinationName": "Indonesia, Banjarmasin (BDJ)" },
            { "origin": "BDJ", "destination": "BTH", "originName": "Indonesia, Banjarmasin (BDJ)", "destinationName": "Indonesia, Batam (BTH)" },
            { "origin": "BDJ", "destination": "BKS", "originName": "Indonesia, Banjarmasin (BDJ)", "destinationName": "Indonesia, Bengkulu (BKS)" },
            { "origin": "BDJ", "destination": "BIK", "originName": "Indonesia, Banjarmasin (BDJ)", "destinationName": "Indonesia, Biak (BIK)" },
            { "origin": "BDJ", "destination": "DPS", "originName": "Indonesia, Banjarmasin (BDJ)", "destinationName": "Indonesia, Denpasar, Bali (DPS)" },
            { "origin": "BDJ", "destination": "CGK", "originName": "Indonesia, Banjarmasin (BDJ)", "destinationName": "Indonesia, Jakarta,Soekarno Hatta (CGK)" },
            { "origin": "BDJ", "destination": "DJB", "originName": "Indonesia, Banjarmasin (BDJ)", "destinationName": "Indonesia, Jambi, Paalmerah Airport (DJB)" },
            { "origin": "BDJ", "destination": "KBU", "originName": "Indonesia, Banjarmasin (BDJ)", "destinationName": "Indonesia, Kotabaru (KBU)" },
            { "origin": "BDJ", "destination": "KOE", "originName": "Indonesia, Banjarmasin (BDJ)", "destinationName": "Indonesia, Kupang (KOE)" },
            { "origin": "BDJ", "destination": "LOP", "originName": "Indonesia, Banjarmasin (BDJ)", "destinationName": "Indonesia, Lombok, Mataram Nusa Tenggara (LOP)" },
            { "origin": "BDJ", "destination": "KNO", "originName": "Indonesia, Banjarmasin (BDJ)", "destinationName": "Indonesia, Medan , Kuala Namo (KNO)" },
            { "origin": "BDJ", "destination": "PDG", "originName": "Indonesia, Banjarmasin (BDJ)", "destinationName": "Indonesia, Padang (PDG)" },
            { "origin": "BDJ", "destination": "PGK", "originName": "Indonesia, Banjarmasin (BDJ)", "destinationName": "Indonesia, Pangkal Pinang, Bangka-Belitung (PGK)" },
            { "origin": "BDJ", "destination": "PKU", "originName": "Indonesia, Banjarmasin (BDJ)", "destinationName": "Indonesia, Pekan Baru, Riau (PKU)" },
            { "origin": "BDJ", "destination": "PNK", "originName": "Indonesia, Banjarmasin (BDJ)", "destinationName": "Indonesia, Pontianak (PNK)" },
            { "origin": "BDJ", "destination": "SUB", "originName": "Indonesia, Banjarmasin (BDJ)", "destinationName": "Indonesia, Surabaya1 (SUB)" },
            { "origin": "BDJ", "destination": "TJQ", "originName": "Indonesia, Banjarmasin (BDJ)", "destinationName": "Indonesia, Tanjung Pandan (TJQ)" },
            { "origin": "BDJ", "destination": "JOG", "originName": "Indonesia, Banjarmasin (BDJ)", "destinationName": "Indonesia, Yogyakarta (JOG)" },
            { "origin": "DQJ", "destination": "BDO", "originName": "Indonesia, Banyuwangi (DQJ)", "destinationName": "Indonesia, Bandung (BDO)" },
            { "origin": "BTH", "destination": "ARD", "originName": "Indonesia, Batam (BTH)", "destinationName": "Indonesia, Alor Island (ARD)" },
            { "origin": "BTH", "destination": "BPN", "originName": "Indonesia, Batam (BTH)", "destinationName": "Indonesia, Balikpapan (BPN)" },
            { "origin": "BTH", "destination": "BDJ", "originName": "Indonesia, Batam (BTH)", "destinationName": "Indonesia, Banjarmasin (BDJ)" },
            { "origin": "BTH", "destination": "DPS", "originName": "Indonesia, Batam (BTH)", "destinationName": "Indonesia, Denpasar, Bali (DPS)" },
            { "origin": "BTH", "destination": "CGK", "originName": "Indonesia, Batam (BTH)", "destinationName": "Indonesia, Jakarta,Soekarno Hatta (CGK)" },
            { "origin": "BTH", "destination": "KOE", "originName": "Indonesia, Batam (BTH)", "destinationName": "Indonesia, Kupang (KOE)" },
            { "origin": "BTH", "destination": "LOP", "originName": "Indonesia, Batam (BTH)", "destinationName": "Indonesia, Lombok, Mataram Nusa Tenggara (LOP)" },
            { "origin": "BTH", "destination": "MLG", "originName": "Indonesia, Batam (BTH)", "destinationName": "Indonesia, Malang, Jawa Timur (MLG)" },
            { "origin": "BTH", "destination": "KNO", "originName": "Indonesia, Batam (BTH)", "destinationName": "Indonesia, Medan , Kuala Namo (KNO)" },
            { "origin": "BTH", "destination": "PDG", "originName": "Indonesia, Batam (BTH)", "destinationName": "Indonesia, Padang (PDG)" },
            { "origin": "BTH", "destination": "PLM", "originName": "Indonesia, Batam (BTH)", "destinationName": "Indonesia, Palembang, Sumatera Selatan (PLM)" },
            { "origin": "BTH", "destination": "PKU", "originName": "Indonesia, Batam (BTH)", "destinationName": "Indonesia, Pekan Baru, Riau (PKU)" },
            { "origin": "BTH", "destination": "SRG", "originName": "Indonesia, Batam (BTH)", "destinationName": "Indonesia, Semarang, Jawa Tengah (SRG)" },
            { "origin": "BTH", "destination": "SUB", "originName": "Indonesia, Batam (BTH)", "destinationName": "Indonesia, Surabaya1 (SUB)" },
            { "origin": "BTH", "destination": "TJQ", "originName": "Indonesia, Batam (BTH)", "destinationName": "Indonesia, Tanjung Pandan (TJQ)" },
            { "origin": "BTH", "destination": "UPG", "originName": "Indonesia, Batam (BTH)", "destinationName": "Indonesia, Ujungpandang (UPG)" },
            { "origin": "BTH", "destination": "JOG", "originName": "Indonesia, Batam (BTH)", "destinationName": "Indonesia, Yogyakarta (JOG)" },
            { "origin": "BTW", "destination": "BDJ", "originName": "Indonesia, Batulicin, Kalimantan Selatan (BTW)", "destinationName": "Indonesia, Banjarmasin (BDJ)" },
            { "origin": "BKS", "destination": "BPN", "originName": "Indonesia, Bengkulu (BKS)", "destinationName": "Indonesia, Balikpapan (BPN)" },
            { "origin": "BKS", "destination": "BDJ", "originName": "Indonesia, Bengkulu (BKS)", "destinationName": "Indonesia, Banjarmasin (BDJ)" },
            { "origin": "BKS", "destination": "DPS", "originName": "Indonesia, Bengkulu (BKS)", "destinationName": "Indonesia, Denpasar, Bali (DPS)" },
            { "origin": "BKS", "destination": "CGK", "originName": "Indonesia, Bengkulu (BKS)", "destinationName": "Indonesia, Jakarta,Soekarno Hatta (CGK)" },
            { "origin": "BKS", "destination": "MLG", "originName": "Indonesia, Bengkulu (BKS)", "destinationName": "Indonesia, Malang, Jawa Timur (MLG)" },
            { "origin": "BKS", "destination": "PLM", "originName": "Indonesia, Bengkulu (BKS)", "destinationName": "Indonesia, Palembang, Sumatera Selatan (PLM)" },
            { "origin": "BKS", "destination": "SRG", "originName": "Indonesia, Bengkulu (BKS)", "destinationName": "Indonesia, Semarang, Jawa Tengah (SRG)" },
            { "origin": "BKS", "destination": "SUB", "originName": "Indonesia, Bengkulu (BKS)", "destinationName": "Indonesia, Surabaya1 (SUB)" },
            { "origin": "BKS", "destination": "UPG", "originName": "Indonesia, Bengkulu (BKS)", "destinationName": "Indonesia, Ujungpandang (UPG)" },
            { "origin": "BKS", "destination": "JOG", "originName": "Indonesia, Bengkulu (BKS)", "destinationName": "Indonesia, Yogyakarta (JOG)" },
            { "origin": "BJG", "destination": "AEK", "originName": "Indonesia, Bolaang (BJG)", "destinationName": "Indonesia, Aek Godang (AEK)" },
            { "origin": "CXP", "destination": "HLP", "originName": "Indonesia, Cilacap, Jawa Tengah (CXP)", "destinationName": "Indonesia, Jakarta,Halim Perdanakusuma (HLP)" },
            { "origin": "CBN", "destination": "CGK", "originName": "Indonesia, Cirebon, Jawa Barat (CBN)", "destinationName": "Indonesia, Jakarta,Soekarno Hatta (CGK)" },
            { "origin": "DPS", "destination": "ADL", "originName": "Indonesia, Denpasar, Bali (DPS)", "destinationName": "Australia, Adelaide (ADL)" },
            { "origin": "DPS", "destination": "BPN", "originName": "Indonesia, Denpasar, Bali (DPS)", "destinationName": "Indonesia, Balikpapan (BPN)" },
            { "origin": "DPS", "destination": "BDO", "originName": "Indonesia, Denpasar, Bali (DPS)", "destinationName": "Indonesia, Bandung (BDO)" },
            { "origin": "DPS", "destination": "BDJ", "originName": "Indonesia, Denpasar, Bali (DPS)", "destinationName": "Indonesia, Banjarmasin (BDJ)" },
            { "origin": "DPS", "destination": "BTH", "originName": "Indonesia, Denpasar, Bali (DPS)", "destinationName": "Indonesia, Batam (BTH)" },
            { "origin": "DPS", "destination": "BKS", "originName": "Indonesia, Denpasar, Bali (DPS)", "destinationName": "Indonesia, Bengkulu (BKS)" },
            { "origin": "DPS", "destination": "CGK", "originName": "Indonesia, Denpasar, Bali (DPS)", "destinationName": "Indonesia, Jakarta,Soekarno Hatta (CGK)" },
            { "origin": "DPS", "destination": "DJB", "originName": "Indonesia, Denpasar, Bali (DPS)", "destinationName": "Indonesia, Jambi, Paalmerah Airport (DJB)" },
            { "origin": "DPS", "destination": "KOE", "originName": "Indonesia, Denpasar, Bali (DPS)", "destinationName": "Indonesia, Kupang (KOE)" },
            { "origin": "DPS", "destination": "KNO", "originName": "Indonesia, Denpasar, Bali (DPS)", "destinationName": "Indonesia, Medan , Kuala Namo (KNO)" },
            { "origin": "DPS", "destination": "PDG", "originName": "Indonesia, Denpasar, Bali (DPS)", "destinationName": "Indonesia, Padang (PDG)" },
            { "origin": "DPS", "destination": "PGK", "originName": "Indonesia, Denpasar, Bali (DPS)", "destinationName": "Indonesia, Pangkal Pinang, Bangka-Belitung (PGK)" },
            { "origin": "DPS", "destination": "PKU", "originName": "Indonesia, Denpasar, Bali (DPS)", "destinationName": "Indonesia, Pekan Baru, Riau (PKU)" },
            { "origin": "DPS", "destination": "SUB", "originName": "Indonesia, Denpasar, Bali (DPS)", "destinationName": "Indonesia, Surabaya1 (SUB)" },
            { "origin": "DPS", "destination": "TJQ", "originName": "Indonesia, Denpasar, Bali (DPS)", "destinationName": "Indonesia, Tanjung Pandan (TJQ)" },
            { "origin": "DPS", "destination": "JOG", "originName": "Indonesia, Denpasar, Bali (DPS)", "destinationName": "Indonesia, Yogyakarta (JOG)" },
            { "origin": "FKQ", "destination": "BDO", "originName": "Indonesia, Fak Fak (FKQ)", "destinationName": "Indonesia, Bandung (BDO)" },
            { "origin": "GTO", "destination": "CGK", "originName": "Indonesia, Gorontalo (GTO)", "destinationName": "Indonesia, Jakarta,Soekarno Hatta (CGK)" },
            { "origin": "GNS", "destination": "CGK", "originName": "Indonesia, Gunungsitoli, Sumatera Utara (GNS)", "destinationName": "Indonesia, Jakarta,Soekarno Hatta (CGK)" },
            { "origin": "HLP", "destination": "BPN", "originName": "Indonesia, Jakarta,Halim Perdanakusuma (HLP)", "destinationName": "Indonesia, Balikpapan (BPN)" },
            { "origin": "HLP", "destination": "BDO", "originName": "Indonesia, Jakarta,Halim Perdanakusuma (HLP)", "destinationName": "Indonesia, Bandung (BDO)" },
            { "origin": "HLP", "destination": "DPS", "originName": "Indonesia, Jakarta,Halim Perdanakusuma (HLP)", "destinationName": "Indonesia, Denpasar, Bali (DPS)" },
            { "origin": "HLP", "destination": "GTO", "originName": "Indonesia, Jakarta,Halim Perdanakusuma (HLP)", "destinationName": "Indonesia, Gorontalo (GTO)" },
            { "origin": "HLP", "destination": "CGK", "originName": "Indonesia, Jakarta,Halim Perdanakusuma (HLP)", "destinationName": "Indonesia, Jakarta,Soekarno Hatta (CGK)" },
            { "origin": "HLP", "destination": "DJB", "originName": "Indonesia, Jakarta,Halim Perdanakusuma (HLP)", "destinationName": "Indonesia, Jambi, Paalmerah Airport (DJB)" },
            { "origin": "HLP", "destination": "KDI", "originName": "Indonesia, Jakarta,Halim Perdanakusuma (HLP)", "destinationName": "Indonesia, Kendari (KDI)" },
            { "origin": "HLP", "destination": "MLG", "originName": "Indonesia, Jakarta,Halim Perdanakusuma (HLP)", "destinationName": "Indonesia, Malang, Jawa Timur (MLG)" },
            { "origin": "HLP", "destination": "KNO", "originName": "Indonesia, Jakarta,Halim Perdanakusuma (HLP)", "destinationName": "Indonesia, Medan , Kuala Namo (KNO)" },
            { "origin": "HLP", "destination": "PLM", "originName": "Indonesia, Jakarta,Halim Perdanakusuma (HLP)", "destinationName": "Indonesia, Palembang, Sumatera Selatan (PLM)" },
            { "origin": "HLP", "destination": "SRG", "originName": "Indonesia, Jakarta,Halim Perdanakusuma (HLP)", "destinationName": "Indonesia, Semarang, Jawa Tengah (SRG)" },
            { "origin": "HLP", "destination": "SUB", "originName": "Indonesia, Jakarta,Halim Perdanakusuma (HLP)", "destinationName": "Indonesia, Surabaya1 (SUB)" },
            { "origin": "HLP", "destination": "JOG", "originName": "Indonesia, Jakarta,Halim Perdanakusuma (HLP)", "destinationName": "Indonesia, Yogyakarta (JOG)" },
            { "origin": "CGK", "destination": "ADL", "originName": "Indonesia, Jakarta,Soekarno Hatta (CGK)", "destinationName": "Australia, Adelaide (ADL)" },
            { "origin": "CGK", "destination": "OOL", "originName": "Indonesia, Jakarta,Soekarno Hatta (CGK)", "destinationName": "Australia, GoldCoast (OOL)" },
            { "origin": "CGK", "destination": "MEL", "originName": "Indonesia, Jakarta,Soekarno Hatta (CGK)", "destinationName": "Australia, Melbourne (MEL)" },
            { "origin": "CGK", "destination": "PER", "originName": "Indonesia, Jakarta,Soekarno Hatta (CGK)", "destinationName": "Australia, Perth (PER)" },
            { "origin": "CGK", "destination": "CTU", "originName": "Indonesia, Jakarta,Soekarno Hatta (CGK)", "destinationName": "China, Chengdu (CTU)" },
            { "origin": "CGK", "destination": "KMG", "originName": "Indonesia, Jakarta,Soekarno Hatta (CGK)", "destinationName": "China, Kunming (KMG)" },
            { "origin": "CGK", "destination": "SZX", "originName": "Indonesia, Jakarta,Soekarno Hatta (CGK)", "destinationName": "China, Shenzhen (SZX)" },
            { "origin": "CGK", "destination": "CCU", "originName": "Indonesia, Jakarta,Soekarno Hatta (CGK)", "destinationName": "India, Kolkata (CCU)" },
            { "origin": "CGK", "destination": "AHI", "originName": "Indonesia, Jakarta,Soekarno Hatta (CGK)", "destinationName": "Indonesia, Amahai, West Papua (AHI)" },
            { "origin": "CGK", "destination": "AMQ", "originName": "Indonesia, Jakarta,Soekarno Hatta (CGK)", "destinationName": "Indonesia, Ambon (AMQ)" },
            { "origin": "CGK", "destination": "AGD", "originName": "Indonesia, Jakarta,Soekarno Hatta (CGK)", "destinationName": "Indonesia, Anggi (AGD)" },
            { "origin": "CGK", "destination": "AAS", "originName": "Indonesia, Jakarta,Soekarno Hatta (CGK)", "destinationName": "Indonesia, Apalapsili (AAS)" },
            { "origin": "CGK", "destination": "ABU", "originName": "Indonesia, Jakarta,Soekarno Hatta (CGK)", "destinationName": "Indonesia, Atambua (ABU)" },
            { "origin": "CGK", "destination": "AYW", "originName": "Indonesia, Jakarta,Soekarno Hatta (CGK)", "destinationName": "Indonesia, Ayawasi (AYW)" },
            { "origin": "CGK", "destination": "BJW", "originName": "Indonesia, Jakarta,Soekarno Hatta (CGK)", "destinationName": "Indonesia, Bajawa (BJW)" },
            { "origin": "CGK", "destination": "BPN", "originName": "Indonesia, Jakarta,Soekarno Hatta (CGK)", "destinationName": "Indonesia, Balikpapan (BPN)" },
            { "origin": "CGK", "destination": "BTJ", "originName": "Indonesia, Jakarta,Soekarno Hatta (CGK)", "destinationName": "Indonesia, Banda Aceh, Aceh (BTJ)" },
            { "origin": "CGK", "destination": "TKG", "originName": "Indonesia, Jakarta,Soekarno Hatta (CGK)", "destinationName": "Indonesia, Bandar Lampung, Lampung (TKG)" },
            { "origin": "CGK", "destination": "BDO", "originName": "Indonesia, Jakarta,Soekarno Hatta (CGK)", "destinationName": "Indonesia, Bandung (BDO)" },
            { "origin": "CGK", "destination": "BDJ", "originName": "Indonesia, Jakarta,Soekarno Hatta (CGK)", "destinationName": "Indonesia, Banjarmasin (BDJ)" },
            { "origin": "CGK", "destination": "DQJ", "originName": "Indonesia, Jakarta,Soekarno Hatta (CGK)", "destinationName": "Indonesia, Banyuwangi (DQJ)" },
            { "origin": "CGK", "destination": "BTH", "originName": "Indonesia, Jakarta,Soekarno Hatta (CGK)", "destinationName": "Indonesia, Batam (BTH)" },
            { "origin": "CGK", "destination": "BKS", "originName": "Indonesia, Jakarta,Soekarno Hatta (CGK)", "destinationName": "Indonesia, Bengkulu (BKS)" },
            { "origin": "CGK", "destination": "BIK", "originName": "Indonesia, Jakarta,Soekarno Hatta (CGK)", "destinationName": "Indonesia, Biak (BIK)" },
            { "origin": "CGK", "destination": "WUB", "originName": "Indonesia, Jakarta,Soekarno Hatta (CGK)", "destinationName": "Indonesia, Buli (WUB)" },
            { "origin": "CGK", "destination": "DPS", "originName": "Indonesia, Jakarta,Soekarno Hatta (CGK)", "destinationName": "Indonesia, Denpasar, Bali (DPS)" },
            { "origin": "CGK", "destination": "GTO", "originName": "Indonesia, Jakarta,Soekarno Hatta (CGK)", "destinationName": "Indonesia, Gorontalo (GTO)" },
            { "origin": "CGK", "destination": "HLP", "originName": "Indonesia, Jakarta,Soekarno Hatta (CGK)", "destinationName": "Indonesia, Jakarta,Halim Perdanakusuma (HLP)" },
            { "origin": "CGK", "destination": "CGK", "originName": "Indonesia, Jakarta,Soekarno Hatta (CGK)", "destinationName": "Indonesia, Jakarta,Soekarno Hatta (CGK)" },
            { "origin": "CGK", "destination": "DJB", "originName": "Indonesia, Jakarta,Soekarno Hatta (CGK)", "destinationName": "Indonesia, Jambi, Paalmerah Airport (DJB)" },
            { "origin": "CGK", "destination": "DJJ", "originName": "Indonesia, Jakarta,Soekarno Hatta (CGK)", "destinationName": "Indonesia, Jayapura, Papua (DJJ)" },
            { "origin": "CGK", "destination": "KNG", "originName": "Indonesia, Jakarta,Soekarno Hatta (CGK)", "destinationName": "Indonesia, Kaimana (KNG)" },
            { "origin": "CGK", "destination": "KDI", "originName": "Indonesia, Jakarta,Soekarno Hatta (CGK)", "destinationName": "Indonesia, Kendari (KDI)" },
            { "origin": "CGK", "destination": "KOE", "originName": "Indonesia, Jakarta,Soekarno Hatta (CGK)", "destinationName": "Indonesia, Kupang (KOE)" },
            { "origin": "CGK", "destination": "LOP", "originName": "Indonesia, Jakarta,Soekarno Hatta (CGK)", "destinationName": "Indonesia, Lombok, Mataram Nusa Tenggara (LOP)" },
            { "origin": "CGK", "destination": "LUW", "originName": "Indonesia, Jakarta,Soekarno Hatta (CGK)", "destinationName": "Indonesia, Luwuk, Sulawesi Tengah (LUW)" },
            { "origin": "CGK", "destination": "MLG", "originName": "Indonesia, Jakarta,Soekarno Hatta (CGK)", "destinationName": "Indonesia, Malang, Jawa Timur (MLG)" },
            { "origin": "CGK", "destination": "MDC", "originName": "Indonesia, Jakarta,Soekarno Hatta (CGK)", "destinationName": "Indonesia, Manado, Sulawesi Utara (MDC)" },
            { "origin": "CGK", "destination": "MXB", "originName": "Indonesia, Jakarta,Soekarno Hatta (CGK)", "destinationName": "Indonesia, Masamba (MXB)" },
            { "origin": "CGK", "destination": "KNO", "originName": "Indonesia, Jakarta,Soekarno Hatta (CGK)", "destinationName": "Indonesia, Medan , Kuala Namo (KNO)" },
            { "origin": "CGK", "destination": "MEQ", "originName": "Indonesia, Jakarta,Soekarno Hatta (CGK)", "destinationName": "Indonesia, Meulaboh, Aceh, Cut Nyak Dien Airport (MEQ)" },
            { "origin": "CGK", "destination": "PDG", "originName": "Indonesia, Jakarta,Soekarno Hatta (CGK)", "destinationName": "Indonesia, Padang (PDG)" },
            { "origin": "CGK", "destination": "AEG", "originName": "Indonesia, Jakarta,Soekarno Hatta (CGK)", "destinationName": "Indonesia, Padang Sidempuan (AEG)" },
            { "origin": "CGK", "destination": "PLM", "originName": "Indonesia, Jakarta,Soekarno Hatta (CGK)", "destinationName": "Indonesia, Palembang, Sumatera Selatan (PLM)" },
            { "origin": "CGK", "destination": "PLW", "originName": "Indonesia, Jakarta,Soekarno Hatta (CGK)", "destinationName": "Indonesia, Palu, Sulawesi Tengah (PLW)" },
            { "origin": "CGK", "destination": "PGK", "originName": "Indonesia, Jakarta,Soekarno Hatta (CGK)", "destinationName": "Indonesia, Pangkal Pinang, Bangka-Belitung (PGK)" },
            { "origin": "CGK", "destination": "PKU", "originName": "Indonesia, Jakarta,Soekatta (CGK)", "destinationName": "Indonesia, Pekan Baru, Riau (PKU)" },
            { "origin": "CGK", "destination": "PCB", "originName": "Indonesia, Jakarta,Soekarno Hatta (CGK)", "destinationName": "Indonesia, Pondok Cabe Airport, Jakarta (PCB)" },
            { "origin": "CGK", "destination": "PNK", "originName": "Indonesia, Jakarta,Soekarno Hatta (CGK)", "destinationName": "Indonesia, Pontianak (PNK)" },
            { "origin": "CGK", "destination": "PSJ", "originName": "Indonesia, Jakarta,Soekarno Hatta (CGK)", "destinationName": "Indonesia, Poso, Sulawesi Tengah (PSJ)" },
            { "origin": "CGK", "destination": "SRG", "originName": "Indonesia, Jakarta,Soekarno Hatta (CGK)", "destinationName": "Indonesia, Semarang, Jawa Tengah (SRG)" },
            { "origin": "CGK", "destination": "DTB", "originName": "Indonesia, Jakarta,Soekarno Hatta (CGK)", "destinationName": "Indonesia, Silangit (DTB)" },
            { "origin": "CGK", "destination": "RKO", "originName": "Indonesia, Jakarta,Soekarno Hatta (CGK)", "destinationName": "Indonesia, Sipora (RKO)" },
            { "origin": "CGK", "destination": "SOC", "originName": "Indonesia, Jakarta,Soekarno Hatta (CGK)", "destinationName": "Indonesia, Solo (SOC)" },
            { "origin": "CGK", "destination": "SWQ", "originName": "Indonesia, Jakarta,Soekarno Hatta (CGK)", "destinationName": "Indonesia, Sumbawa (SWQ)" },
            { "origin": "CGK", "destination": "SUB", "originName": "Indonesia, Jakarta,Soekarno Hatta (CGK)", "destinationName": "Indonesia, Surabaya1 (SUB)" },
            { "origin": "CGK", "destination": "TJQ", "originName": "Indonesia, Jakarta,Soekarno Hatta (CGK)", "destinationName": "Indonesia, Tanjung Pandan (TJQ)" },
            { "origin": "CGK", "destination": "TNJ", "originName": "Indonesia, Jakarta,Soekarno Hatta (CGK)", "destinationName": "Indonesia, Tanjung Pinang, Riau (TNJ)" },
            { "origin": "CGK", "destination": "TRK", "originName": "Indonesia, Jakarta,Soekarno Hatta (CGK)", "destinationName": "Indonesia, Tarakan, Kalimantan Timur (TRK)" },
            { "origin": "CGK", "destination": "TIM", "originName": "Indonesia, Jakarta,Soekarno Hatta (CGK)", "destinationName": "Indonesia, Timika, Tembagapura (TIM)" },
            { "origin": "CGK", "destination": "UPG", "originName": "Indonesia, Jakarta,Soekarno Hatta (CGK)", "destinationName": "Indonesia, Ujungpandang (UPG)" },
            { "origin": "CGK", "destination": "WMX", "originName": "Indonesia, Jakarta,Soekarno Hatta (CGK)", "destinationName": "Indonesia, Wamena (WMX)" },
            { "origin": "CGK", "destination": "JOG", "originName": "Indonesia, Jakarta,Soekarno Hatta (CGK)", "destinationName": "Indonesia, Yogyakarta (JOG)" },
            { "origin": "CGK", "destination": "NGO", "originName": "Indonesia, Jakarta,Soekarno Hatta (CGK)", "destinationName": "Japan, Nagoya - Chubu (NGO)" },
            { "origin": "CGK", "destination": "KIX", "originName": "Indonesia, Jakarta,Soekarno Hatta (CGK)", "destinationName": "Japan, Osaka - Kansai (KIX)" },
            { "origin": "CGK", "destination": "HND", "originName": "Indonesia, Jakarta,Soekarno Hatta (CGK)", "destinationName": "Japan, Tokyo - Haneda (HND)" },
            { "origin": "CGK", "destination": "NRT", "originName": "Indonesia, Jakarta,Soekarno Hatta (CGK)", "destinationName": "Japan, Tokyo - Narita (NRT)" },
            { "origin": "CGK", "destination": "JHB", "originName": "Indonesia, Jakarta,Soekarno Hatta (CGK)", "destinationName": "Malaysia, Johor Bahru (JHB)" },
            { "origin": "CGK", "destination": "BKI", "originName": "Indonesia, Jakarta,Soekarno Hatta (CGK)", "destinationName": "Malaysia, Kota Kinabalu (BKI)" },
            { "origin": "CGK", "destination": "KUL", "originName": "Indonesia, Jakarta,Soekarno Hatta (CGK)", "destinationName": "Malaysia, Kuala Lumpur (KUL)" },
            { "origin": "CGK", "destination": "KCH", "originName": "Indonesia, Jakarta,Soekarno Hatta (CGK)", "destinationName": "Malaysia, Kuching (KCH)" },
            { "origin": "CGK", "destination": "TAG", "originName": "Indonesia, Jakarta,Soekarno Hatta (CGK)", "destinationName": "Phillipines, Tagbilaran (TAG)" },
            { "origin": "CGK", "destination": "JED", "originName": "Indonesia, Jakarta,Soekarno Hatta (CGK)", "destinationName": "Saudi Arabia, Jeddah (JED)" },
            { "origin": "CGK", "destination": "SIN", "originName": "Indonesia, Jakarta,Soekarno Hatta (CGK)", "destinationName": "Singapore, Singapore (SIN)" },
            { "origin": "CGK", "destination": "BKK", "originName": "Indonesia, Jakarta,Soekarno Hatta (CGK)", "destinationName": "Thailand, BANGKOK (BKK)" },
            { "origin": "CGK", "destination": "HKT", "originName": "Indonesia, Jakarta,Soekarno Hatta (CGK)", "destinationName": "Thailand, Phuket (HKT)" },
            { "origin": "CGK", "destination": "URT", "originName": "Indonesia, Jakarta,Soekarno Hatta (CGK)", "destinationName": "Thailand, Surat Thani (URT)" },
            { "origin": "DJB", "destination": "BPN", "originName": "Indonesia, Jambi, Paalmerah Airport (DJB)", "destinationName": "Indonesia, Balikpapan (BPN)" },
            { "origin": "DJB", "destination": "BDJ", "originName": "Indonesia, Jambi, Paalmerah Airport (DJB)", "destinationName": "Indonesia, Banjarmasin (BDJ)" },
            { "origin": "DJB", "destination": "DPS", "originName": "Indonesia, Jambi, Paalmerah Airport (DJB)", "destinationName": "Indonesia, Denpasar, Bali (DPS)" },
            { "origin": "DJB", "destination": "CGK", "originName": "Indonesia, Jambi, Paalmerah Airport (DJB)", "destinationName": "Indonesia, Jakarta,Soekarno Hatta (CGK)" },
            { "origin": "DJB", "destination": "MLG", "originName": "Indonesia, Jambi, Paalmerah Airport (DJB)", "destinationName": "Indonesia, Malang, Jawa Timur (MLG)" },
            { "origin": "DJB", "destination": "PKU", "originName": "Indonesia, Jambi, Paalmerah Airport (DJB)", "destinationName": "Indonesia, Pekan Baru, Riau (PKU)" },
            { "origin": "DJB", "destination": "SRG", "originName": "Indonesia, Jambi, Paalmerah Airport (DJB)", "destinationName": "Indonesia, Semarang, Jawa Tengah (SRG)" },
            { "origin": "DJB", "destination": "SUB", "originName": "Indonesia, Jambi, Paalmerah Airport (DJB)", "destinationName": "Indonesia, Surabaya1 (SUB)" },
            { "origin": "DJB", "destination": "TJQ", "originName": "Indonesia, Jambi, Paalmerah Airport (DJB)", "destinationName": "Indonesia, Tanjung Pandan (TJQ)" },
            { "origin": "DJB", "destination": "UPG", "originName": "Indonesia, Jambi, Paalmerah Airport (DJB)", "destinationName": "Indonesia, Ujungpandang (UPG)" },
            { "origin": "DJB", "destination": "JOG", "originName": "Indonesia, Jambi, Paalmerah Airport (DJB)", "destinationName": "Indonesia, Yogyakarta (JOG)" },
            { "origin": "DJJ", "destination": "SUB", "originName": "Indonesia, Jayapura, Papua (DJJ)", "destinationName": "Indonesia, Surabaya1 (SUB)" },
            { "origin": "KNG", "destination": "DTB", "originName": "Indonesia, Kaimana (KNG)", "destinationName": "Indonesia, Silangit (DTB)" },
            { "origin": "KDI", "destination": "CGK", "originName": "Indonesia, Kendari (KDI)", "destinationName": "Indonesia, Jakarta,Soekarno Hatta (CGK)" },
            { "origin": "KBU", "destination": "CGK", "originName": "Indonesia, Kotabaru (KBU)", "destinationName": "Indonesia, Jakarta,Soekarno Hatta (CGK)" },
            { "origin": "KOE", "destination": "BPN", "originName": "Indonesia, Kupang (KOE)", "destinationName": "Indonesia, Balikpapan (BPN)" },
            { "origin": "KOE", "destination": "BDJ", "originName": "Indonesia, Kupang (KOE)", "destinationName": "Indonesia, Banjarmasin (BDJ)" },
            { "origin": "KOE", "destination": "BTH", "originName": "Indonesia, Kupang (KOE)", "destinationName": "Indonesia, Batam (BTH)" },
            { "origin": "KOE", "destination": "DPS", "originName": "Indonesia, Kupang (KOE)", "destinationName": "Indonesia, Denpasar, Bali (DPS)" },
            { "origin": "KOE", "destination": "CGK", "originName": "Indonesia, Kupang (KOE)", "destinationName": "Indonesia, Jakarta,Soekarno Hatta (CGK)" },
            { "origin": "KOE", "destination": "LOP", "originName": "Indonesia, Kupang (KOE)", "destinationName": "Indonesia, Lombok, Mataram Nusa Tenggara (LOP)" },
            { "origin": "KOE", "destination": "SRG", "originName": "Indonesia, Kupang (KOE)", "destinationName": "Indonesia, Semarang, Jawa Tengah (SRG)" },
            { "origin": "KOE", "destination": "SUB", "originName": "Indonesia, Kupang (KOE)", "destinationName": "Indonesia, Surabaya1 (SUB)" },
            { "origin": "KOE", "destination": "CNX", "originName": "Indonesia, Kupang (KOE)", "destinationName": "Thailand, Chiang Mai (CNX)" },
            { "origin": "LBJ", "destination": "MLG", "originName": "Indonesia, Labuhan Bajo (LBJ)", "destinationName": "Indonesia, Malang, Jawa Timur (MLG)" },
            { "origin": "LOP", "destination": "BPN", "originName": "Indonesia, Lombok, Mataram Nusa Tenggara (LOP)", "destinationName": "Indonesia, Balikpapan (BPN)" },
            { "origin": "LOP", "destination": "BDJ", "originName": "Indonesia, Lombok, Mataram Nusa Tenggara (LOP)", "destinationName": "Indonesia, Banjarmasin (BDJ)" },
            { "origin": "LOP", "destination": "BTH", "originName": "Indonesia, Lombok, Mataram Nusa Tenggara (LOP)", "destinationName": "Indonesia, Batam (BTH)" },
            { "origin": "LOP", "destination": "CGK", "originName": "Indonesia, Lombok, Mataram Nusa Tenggara (LOP)", "destinationName": "Indonesia, Jakarta,Soekarno Hatta (CGK)" },
            { "origin": "LOP", "destination": "KOE", "originName": "Indonesia, Lombok, Mataram Nusa Tenggara (LOP)", "destinationName": "Indonesia, Kupang (KOE)" },
            { "origin": "LOP", "destination": "SUB", "originName": "Indonesia, Lombok, Mataram Nusa Tenggara (LOP)", "destinationName": "Indonesia, Surabaya1 (SUB)" },
            { "origin": "LOP", "destination": "TJQ", "originName": "Indonesia, Lombok, Mataram Nusa Tenggara (LOP)", "destinationName": "Indonesia, Tanjung Pandan (TJQ)" },
            { "origin": "MLG", "destination": "ABU", "originName": "Indonesia, Malang, Jawa Timur (MLG)", "destinationName": "Indonesia, Atambua (ABU)" },
            { "origin": "MLG", "destination": "BTH", "originName": "Indonesia, Malang, Jawa Timur (MLG)", "destinationName": "Indonesia, Batam (BTH)" },
            { "origin": "MLG", "destination": "BKS", "originName": "Indonesia, Malang, Jawa Timur (MLG)", "destinationName": "Indonesia, Bengkulu (BKS)" },
            { "origin": "MLG", "destination": "HLP", "originName": "Indonesia, Malang, Jawa Timur (MLG)", "destinationName": "Indonesia, Jakarta,Halim Perdanakusuma (HLP)" },
            { "origin": "MLG", "destination": "CGK", "originName": "Indonesia, Malang, Jawa Timur (MLG)", "destinationName": "Indonesia, Jakarta,Soekarno Hatta (CGK)" },
            { "origin": "MLG", "destination": "DJB", "originName": "Indonesia, Malang, Jawa Timur (MLG)", "destinationName": "Indonesia, Jambi, Paalmerah Airport (DJB)" },
            { "origin": "MLG", "destination": "MLG", "originName": "Indonesia, Malang, Jawa Timur (MLG)", "destinationName": "Indonesia, Malang, Jawa Timur (MLG)" },
            { "origin": "MLG", "destination": "KNO", "originName": "Indonesia, Malang, Jawa Timur (MLG)", "destinationName": "Indonesia, Medan , Kuala Namo (KNO)" },
            { "origin": "MLG", "destination": "PDG", "originName": "Indonesia, Malang, Jawa Timur (MLG)", "destinationName": "Indonesia, Padang (PDG)" },
            { "origin": "MLG", "destination": "PGK", "originName": "Indonesia, Malang, Jawa Timur (MLG)", "destinationName": "Indonesia, Pangkal Pinang, Bangka-Belitung (PGK)" },
            { "origin": "MLG", "destination": "PKU", "originName": "Indonesia, Malang, Jawa Timur (MLG)", "destinationName": "Indonesia, Pekan Baru, Riau (PKU)" },
            { "origin": "MLG", "destination": "SRG", "originName": "Indonesia, Malang, Jawa Timur (MLG)", "destinationName": "Indonesia, Semarang, Jawa Tengah (SRG)" },
            { "origin": "MLG", "destination": "SUB", "originName": "Indonesia, Malang, Jawa Timur (MLG)", "destinationName": "Indonesia, Surabaya1 (SUB)" },
            { "origin": "MLG", "destination": "TJQ", "originName": "Indonesia, Malang, Jawa Timur (MLG)", "destinationName": "Indonesia, Tanjung Pandan (TJQ)" },
            { "origin": "MLG", "destination": "TRK", "originName": "Indonesia, Malang, Jawa Timur (MLG)", "destinationName": "Indonesia, Tarakan, Kalimantan Timur (TRK)" },
            { "origin": "MDC", "destination": "CGK", "originName": "Indonesia, Manado, Sulawesi Utara (MDC)", "destinationName": "Indonesia, Jakarta,Soekarno Hatta (CGK)" },
            { "origin": "MXB", "destination": "SUB", "originName": "Indonesia, Masamba (MXB)", "destinationName": "Indonesia, Surabaya1 (SUB)" },
            { "origin": "AMI", "destination": "AMQ", "originName": "Indonesia, Mataram (AMI)", "destinationName": "Indonesia, Ambon (AMQ)" },
            { "origin": "MES", "destination": "AHI", "originName": "Indonesia, Medan (MES)", "destinationName": "Indonesia, Amahai, West Papua (AHI)" },
            { "origin": "MES", "destination": "KNO", "originName": "Indonesia, Medan (MES)", "destinationName": "Indonesia, Medan , Kuala Namo (KNO)" },
            { "origin": "KNO", "destination": "BPN", "originName": "Indonesia, Medan , Kuala Namo (KNO)", "destinationName": "Indonesia, Balikpapan (BPN)" },
            { "origin": "KNO", "destination": "BDO", "originName": "Indonesia, Medan , Kuala Namo (KNO)", "destinationName": "Indonesia, Bandung (BDO)" },
            { "origin": "KNO", "destination": "BDJ", "originName": "Indonesia, Medan , Kuala Namo (KNO)", "destinationName": "Indonesia, Banjarmasin (BDJ)" },
            { "origin": "KNO", "destination": "BTH", "originName": "Indonesia, Medan , Kuala Namo (KNO)", "destinationName": "Indonesia, Batam (BTH)" },
            { "origin": "KNO", "destination": "DPS", "originName": "Indonesia, Medan , Kuala Namo (KNO)", "destinationName": "Indonesia, Denpasar, Bali (DPS)" },
            { "origin": "KNO", "destination": "HLP", "originName": "Indonesia, Medan , Kuala Namo (KNO)", "destinationName": "Indonesia, Jakarta,Halim Perdanakusuma (HLP)" },
            { "origin": "KNO", "destination": "CGK", "originName": "Indonesia, Medan , Kuala Namo (KNO)", "destinationName": "Indonesia, Jakarta,Soekarno Hatta (CGK)" },
            { "origin": "KNO", "destination": "LBJ", "originName": "Indonesia, Medan , Kuala Namo (KNO)", "destinationName": "Indonesia, Labuhan Bajo (LBJ)" },
            { "origin": "KNO", "destination": "MLG", "originName": "Indonesia, Medan , Kuala Namo (KNO)", "destinationName": "Indonesia, Malang, Jawa Timur (MLG)" },
            { "origin": "KNO", "destination": "PLM", "originName": "Indonesia, Medan , Kuala Namo (KNO)", "destinationName": "Indonesia, Palembang, Sumatera Selatan (PLM)" },
            { "origin": "KNO", "destination": "PNK", "originName": "Indonesia, Medan , Kuala Namo (KNO)", "destinationName": "Indonesia, Pontianak (PNK)" },
            { "origin": "KNO", "destination": "SRG", "originName": "Indonesia, Medan , Kuala Namo (KNO)", "destinationName": "Indonesia, Semarang, Jawa Tengah (SRG)" },
            { "origin": "KNO", "destination": "SUB", "originName": "Indonesia, Medan , Kuala Namo (KNO)", "destinationName": "Indonesia, Surabaya1 (SUB)" },
            { "origin": "KNO", "destination": "TJQ", "originName": "Indonesia, Medan , Kuala Namo (KNO)", "destinationName": "Indonesia, Tanjung Pandan (TJQ)" },
            { "origin": "KNO", "destination": "UPG", "originName": "Indonesia, Medan , Kuala Namo (KNO)", "destinationName": "Indonesia, Ujungpandang (UPG)" },
            { "origin": "KNO", "destination": "JOG", "originName": "Indonesia, Medan , Kuala Namo (KNO)", "destinationName": "Indonesia, Yogyakarta (JOG)" },
            { "origin": "PDG", "destination": "BPN", "originName": "Indonesia, Padang (PDG)", "destinationName": "Indonesia, Balikpapan (BPN)" },
            { "origin": "PDG", "destination": "BDJ", "originName": "Indonesia, Padang (PDG)", "destinationName": "Indonesia, Banjarmasin (BDJ)" },
            { "origin": "PDG", "destination": "BTH", "originName": "Indonesia, Padang (PDG)", "destinationName": "Indonesia, Batam (BTH)" },
            { "origin": "PDG", "destination": "DPS", "originName": "Indonesia, Padang (PDG)", "destinationName": "Indonesia, Denpasar, Bali (DPS)" },
            { "origin": "PDG", "destination": "HLP", "originName": "Indonesia, Padang (PDG)", "destinationName": "Indonesia, Jakarta,Halim Perdanakusuma (HLP)" },
            { "origin": "PDG", "destination": "CGK", "originName": "Indonesia, Padang (PDG)", "destinationName": "Indonesia, Jakarta,Soekarno Hatta (CGK)" },
            { "origin": "PDG", "destination": "MLG", "originName": "Indonesia, Padang (PDG)", "destinationName": "Indonesia, Malang, Jawa Timur (MLG)" },
            { "origin": "PDG", "destination": "KNO", "originName": "Indonesia, Padang (PDG)", "destinationName": "Indonesia, Medan , Kuala Namo (KNO)" },
            { "origin": "PDG", "destination": "PLM", "originName": "Indonesia, Padang (PDG)", "destinationName": "Indonesia, Palembang, Sumatera Selatan (PLM)" },
            { "origin": "PDG", "destination": "SRG", "originName": "Indonesia, Padang (PDG)", "destinationName": "Indonesia, Semarang, Jawa Tengah (SRG)" },
            { "origin": "PDG", "destination": "SUB", "originName": "Indonesia, Padang (PDG)", "destinationName": "Indonesia, Surabaya1 (SUB)" },
            { "origin": "PDG", "destination": "UPG", "originName": "Indonesia, Padang (PDG)", "destinationName": "Indonesia, Ujungpandang (UPG)" },
            { "origin": "PDG", "destination": "JOG", "originName": "Indonesia, Padang (PDG)", "destinationName": "Indonesia, Yogyakarta (JOG)" },
            { "origin": "AEG", "destination": "BPN", "originName": "Indonesia, Padang Sidempuan (AEG)", "destinationName": "Indonesia, Balikpapan (BPN)" },
            { "origin": "AEG", "destination": "BDJ", "originName": "Indonesia, Padang Sidempuan (AEG)", "destinationName": "Indonesia, Banjarmasin (BDJ)" },
            { "origin": "AEG", "destination": "CGK", "originName": "Indonesia, Padang Sidempuan (AEG)", "destinationName": "Indonesia, Jakarta,Soekarno Hatta (CGK)" },
            { "origin": "PKY", "destination": "DPS", "originName": "Indonesia, Palangkaraya, Kalimantan Tengah (PKY)", "destinationName": "Indonesia, Denpasar, Bali (DPS)" },
            { "origin": "PKY", "destination": "CGK", "originName": "Indonesia, Palangkaraya, Kalimantan Tengah (PKY)", "destinationName": "Indonesia, Jakarta,Soekarno Hatta (CGK)" },
            { "origin": "PKY", "destination": "SUB", "originName": "Indonesia, Palangkaraya, Kalimantan Tengah (PKY)", "destinationName": "Indonesia, Surabaya1 (SUB)" },
            { "origin": "PLM", "destination": "BTH", "originName": "Indonesia, Palembang, Sumatera Selatan (PLM)", "destinationName": "Indonesia, Batam (BTH)" },
            { "origin": "PLM", "destination": "HLP", "originName": "Indonesia, Palembang, Sumatera Selatan (PLM)", "destinationName": "Indonesia, Jakarta,Halim Perdanakusuma (HLP)" },
            { "origin": "PLM", "destination": "CGK", "originName": "Indonesia, Palembang, Sumatera Selatan (PLM)", "destinationName": "Indonesia, Jakarta,Soekarno Hatta (CGK)" },
            { "origin": "PLM", "destination": "KNO", "originName": "Indonesia, Palembang, Sumatera Selatan (PLM)", "destinationName": "Indonesia, Medan , Kuala Namo (KNO)" },
            { "origin": "PLM", "destination": "PDG", "originName": "Indonesia, Palembang, Sumatera Selatan (PLM)", "destinationName": "Indonesia, Padang (PDG)" },
            { "origin": "PLM", "destination": "PKU", "originName": "Indonesia, Palembang, Sumatera Selatan (PLM)", "destinationName": "Indonesia, Pekan Baru, Riau (PKU)" },
            { "origin": "PLM", "destination": "SUB", "originName": "Indonesia, Palembang, Sumatera Selatan (PLM)", "destinationName": "Indonesia, Surabaya1 (SUB)" },
            { "origin": "PGK", "destination": "BPN", "originName": "Indonesia, Pangkal Pinang, Bangka-Belitung (PGK)", "destinationName": "Indonesia, Balikpapan (BPN)" },
            { "origin": "PGK", "destination": "BDJ", "originName": "Indonesia, Pangkal Pinang, Bangka-Belitung (PGK)", "destinationName": "Indonesia, Banjarmasin (BDJ)" },
            { "origin": "PGK", "destination": "DPS", "originName": "Indonesia, Pangkal Pinang, Bangka-Belitung (PGK)", "destinationName": "Indonesia, Denpasar, Bali (DPS)" },
            { "origin": "PGK", "destination": "CGK", "originName": "Indonesia, Pangkal Pinang, Bangka-Belitung (PGK)", "destinationName": "Indonesia, Jakarta,Soekarno Hatta (CGK)" },
            { "origin": "PGK", "destination": "MLG", "originName": "Indonesia, Pangkal Pinang, Bangka-Belitung (PGK)", "destinationName": "Indonesia, Malang, Jawa Timur (MLG)" },
            { "origin": "PGK", "destination": "SRG", "originName": "Indonesia, Pangkal Pinang, Bangka-Belitung (PGK)", "destinationName": "Indonesia, Semarang, Jawa Tengah (SRG)" },
            { "origin": "PGK", "destination": "SUB", "originName": "Indonesia, Pangkal Pinang, Bangka-Belitung (PGK)", "destinationName": "Indonesia, Surabaya1 (SUB)" },
            { "origin": "PGK", "destination": "TJQ", "originName": "Indonesia, Pangkal Pinang, Bangka-Belitung (PGK)", "destinationName": "Indonesia, Tanjung Pandan (TJQ)" },
            { "origin": "PGK", "destination": "UPG", "originName": "Indonesia, Pangkal Pinang, Bangka-Belitung (PGK)", "destinationName": "Indonesia, Ujungpandang (UPG)" },
            { "origin": "PGK", "destination": "JOG", "originName": "Indonesia, Pangkal Pinang, Bangka-Belitung (PGK)", "destinationName": "Indonesia, Yogyakarta (JOG)" },
            { "origin": "PKU", "destination": "BPN", "originName": "Indonesia, Pekan Baru, Riau (PKU)", "destinationName": "Indonesia, Balikpapan (BPN)" },
            { "origin": "PKU", "destination": "BDJ", "originName": "Indonesia, Pekan Baru, Riau (PKU)", "destinationName": "Indonesia, Banjarmasin (BDJ)" },
            { "origin": "PKU", "destination": "BTH", "originName": "Indonesia, Pekan Baru, Riau (PKU)", "destinationName": "Indonesia, Batam (BTH)" },
            { "origin": "PKU", "destination": "DPS", "originName": "Indonesia, Pekan Baru, Riau (PKU)", "destinationName": "Indonesia, Denpasar, Bali (DPS)" },
            { "origin": "PKU", "destination": "CGK", "originName": "Indonesia, Pekan Baru, Riau (PKU)", "destinationName": "Indonesia, Jakarta,Soekarno Hatta (CGK)" },
            { "origin": "PKU", "destination": "DJB", "originName": "Indonesia, Pekan Baru, Riau (PKU)", "destinationName": "Indonesia, Jambi, Paalmerah Airport (DJB)" },
            { "origin": "PKU", "destination": "MLG", "originName": "Indonesia, Pekan Baru, Riau (PKU)", "destinationName": "Indonesia, Malang, Jawa Timur (MLG)" },
            { "origin": "PKU", "destination": "PLM", "originName": "Indonesia, Pekan Baru, Riau (PKU)", "destinationName": "Indonesia, Palembang, Sumatera Selatan (PLM)" },
            { "origin": "PKU", "destination": "SRG", "originName": "Indonesia, Pekan Baru, Riau (PKU)", "destinationName": "Indonesia, Semarang, Jawa Tengah (SRG)" },
            { "origin": "PKU", "destination": "SUB", "originName": "Indonesia, Pekan Baru, Riau (PKU)", "destinationName": "Indonesia, Surabaya1 (SUB)" },
            { "origin": "PKU", "destination": "UPG", "originName": "Indonesia, Pekan Baru, Riau (PKU)", "destinationName": "Indonesia, Ujungpandang (UPG)" },
            { "origin": "PKU", "destination": "JOG", "originName": "Indonesia, Pekan Baru, Riau (PKU)", "destinationName": "Indonesia, Yogyakarta (JOG)" },
            { "origin": "PNK", "destination": "CGK", "originName": "Indonesia, Pontianak (PNK)", "destinationName": "Indonesia, Jakarta,Soekarno Hatta (CGK)" },
            { "origin": "PNK", "destination": "KNO", "originName": "Indonesia, Pontianak (PNK)", "destinationName": "Indonesia, Medan , Kuala Namo (KNO)" },
            { "origin": "PNK", "destination": "JOG", "originName": "Indonesia, Pontianak (PNK)", "destinationName": "Indonesia, Yogyakarta (JOG)" },
            { "origin": "SRG", "destination": "BPN", "originName": "Indonesia, Semarang, Jawa Tengah (SRG)", "destinationName": "Indonesia, Balikpapan (BPN)" },
            { "origin": "SRG", "destination": "BTH", "originName": "Indonesia, Semarang, Jawa Tengah (SRG)", "destinationName": "Indonesia, Batam (BTH)" },
            { "origin": "SRG", "destination": "BKS", "originName": "Indonesia, Semarang, Jawa Tengah (SRG)", "destinationName": "Indonesia, Bengkulu (BKS)" },
            { "origin": "SRG", "destination": "HLP", "originName": "Indonesia, Semarang, Jawa Tengah (SRG)", "destinationName": "Indonesia, Jakarta,Halim Perdanakusuma (HLP)" },
            { "origin": "SRG", "destination": "CGK", "originName": "Indonesia, Semarang, Jawa Tengah (SRG)", "destinationName": "Indonesia, Jakarta,Soekarno Hatta (CGK)" },
            { "origin": "SRG", "destination": "DJB", "originName": "Indonesia, Semarang, Jawa Tengah (SRG)", "destinationName": "Indonesia, Jambi, Paalmerah Airport (DJB)" },
            { "origin": "SRG", "destination": "KOE", "originName": "Indonesia, Semarang, Jawa Tengah (SRG)", "destinationName": "Indonesia, Kupang (KOE)" },
            { "origin": "SRG", "destination": "KNO", "originName": "Indonesia, Semarang, Jawa Tengah (SRG)", "destinationName": "Indonesia, Medan , Kuala Namo (KNO)" },
            { "origin": "SRG", "destination": "PDG", "originName": "Indonesia, Semarang, Jawa Tengah (SRG)", "destinationName": "Indonesia, Padang (PDG)" },
            { "origin": "SRG", "destination": "PGK", "originName": "Indonesia, Semarang, Jawa Tengah (SRG)", "destinationName": "Indonesia, Pangkal Pinang, Bangka-Belitung (PGK)" },
            { "origin": "SRG", "destination": "PKU", "originName": "Indonesia, Semarang, Jawa Tengah (SRG)", "destinationName": "Indonesia, Pekan Baru, Riau (PKU)" },
            { "origin": "SRG", "destination": "SOC", "originName": "Indonesia, Semarang, Jawa Tengah (SRG)", "destinationName": "Indonesia, Solo (SOC)" },
            { "origin": "SRG", "destination": "SUB", "originName": "Indonesia, Semarang, Jawa Tengah (SRG)", "destinationName": "Indonesia, Surabaya1 (SUB)" },
            { "origin": "SRG", "destination": "TJQ", "originName": "Indonesia, Semarang, Jawa Tengah (SRG)", "destinationName": "Indonesia, Tanjung Pandan (TJQ)" },
            { "origin": "SRG", "destination": "JOG", "originName": "Indonesia, Semarang, Jawa Tengah (SRG)", "destinationName": "Indonesia, Yogyakarta (JOG)" },
            { "origin": "DTB", "destination": "CGK", "originName": "Indonesia, Silangit (DTB)", "destinationName": "Indonesia, Jakarta,Soekarno Hatta (CGK)" },
            { "origin": "SOC", "destination": "DPS", "originName": "Indonesia, Solo (SOC)", "destinationName": "Indonesia, Denpasar, Bali (DPS)" },
            { "origin": "SOC", "destination": "HLP", "originName": "Indonesia, Solo (SOC)", "destinationName": "Indonesia, Jakarta,Halim Perdanakusuma (HLP)" },
            { "origin": "SOC", "destination": "CGK", "originName": "Indonesia, Solo (SOC)", "destinationName": "Indonesia, Jakarta,Soekarno Hatta (CGK)" },
            { "origin": "SOC", "destination": "JOG", "originName": "Indonesia, Solo (SOC)", "destinationName": "Indonesia, Yogyakarta (JOG)" },
            { "origin": "SUB", "destination": "CTU", "originName": "Indonesia, Surabaya1 (SUB)", "destinationName": "China, Chengdu (CTU)" },
            { "origin": "SUB", "destination": "AEK", "originName": "Indonesia, Surabaya1 (SUB)", "destinationName": "Indonesia, Aek Godang (AEK)" },
            { "origin": "SUB", "destination": "ARD", "originName": "Indonesia, Surabaya1 (SUB)", "destinationName": "Indonesia, Alor Island (ARD)" },
            { "origin": "SUB", "destination": "AMQ", "originName": "Indonesia, Surabaya1 (SUB)", "destinationName": "Indonesia, Ambon (AMQ)" },
            { "origin": "SUB", "destination": "BPN", "originName": "Indonesia, Surabaya1 (SUB)", "destinationName": "Indonesia, Balikpapan (BPN)" },
            { "origin": "SUB", "destination": "BTJ", "originName": "Indonesia, Surabaya1 (SUB)", "destinationName": "Indonesia, Banda Aceh, Aceh (BTJ)" },
            { "origin": "SUB", "destination": "BDO", "originName": "Indonesia, Surabaya1 (SUB)", "destinationName": "Indonesia, Bandung (BDO)" },
            { "origin": "SUB", "destination": "BDJ", "originName": "Indonesia, Surabaya1 (SUB)", "destinationName": "Indonesia, Banjarmasin (BDJ)" },
            { "origin": "SUB", "destination": "DQJ", "originName": "Indonesia, Surabaya1 (SUB)", "destinationName": "Indonesia, Banyuwangi (DQJ)" },
            { "origin": "SUB", "destination": "BTH", "originName": "Indonesia, Surabaya1 (SUB)", "destinationName": "Indonesia, Batam (BTH)" },
            { "origin": "SUB", "destination": "BUW", "originName": "Indonesia, Surabaya1 (SUB)", "destinationName": "Indonesia, Bau Bau (BUW)" },
            { "origin": "SUB", "destination": "BKS", "originName": "Indonesia, Surabaya1 (SUB)", "destinationName": "Indonesia, Bengkulu (BKS)" },
            { "origin": "SUB", "destination": "BIK", "originName": "Indonesia, Surabaya1 (SUB)", "destinationName": "Indonesia, Biak (BIK)" },
            { "origin": "SUB", "destination": "WUB", "originName": "Indonesia, Surabaya1 (SUB)", "destinationName": "Indonesia, Buli (WUB)" },
            { "origin": "SUB", "destination": "DPS", "originName": "Indonesia, Surabaya1 (SUB)", "destinationName": "Indonesia, Denpasar, Bali (DPS)" },
            { "origin": "SUB", "destination": "INX", "originName": "Indonesia, Surabaya1 (SUB)", "destinationName": "Indonesia, Inanwantan (INX)" },
            { "origin": "SUB", "destination": "HLP", "originName": "Indonesia, Surabaya1 (SUB)", "destinationName": "Indonesia, Jakarta,Halim Perdanakusuma (HLP)" },
            { "origin": "SUB", "destination": "CGK", "originName": "Indonesia, Surabaya1 (SUB)", "destinationName": "Indonesia, Jakarta,Soekarno Hatta (CGK)" },
            { "origin": "SUB", "destination": "DJB", "originName": "Indonesia, Surabaya1 (SUB)", "destinationName": "Indonesia, Jambi, Paalmerah Airport (DJB)" },
            { "origin": "SUB", "destination": "DJJ", "originName": "Indonesia, Surabaya1 (SUB)", "destinationName": "Indonesia, Jayapura, Papua (DJJ)" },
            { "origin": "SUB", "destination": "KDI", "originName": "Indonesia, Surabaya1 (SUB)", "destinationName": "Indonesia, Kendari (KDI)" },
            { "origin": "SUB", "destination": "KOE", "originName": "Indonesia, Surabaya1 (SUB)", "destinationName": "Indonesia, Kupang (KOE)" },
            { "origin": "SUB", "destination": "LBJ", "originName": "Indonesia, Surabaya1 (SUB)", "destinationName": "Indonesia, Labuhan Bajo (LBJ)" },
            { "origin": "SUB", "destination": "LOP", "originName": "Indonesia, Surabaya1 (SUB)", "destinationName": "Indonesia, Lombok, Mataram Nusa Tenggara (LOP)" },
            { "origin": "SUB", "destination": "MLG", "originName": "Indonesia, Surabaya1 (SUB)", "destinationName": "Indonesia, Malang, Jawa Timur (MLG)" },
            { "origin": "SUB", "destination": "MDC", "originName": "Indonesia, Surabaya1 (SUB)", "destinationName": "Indonesia, Manado, Sulawesi Utara (MDC)" },
            { "origin": "SUB", "destination": "MKW", "originName": "Indonesia, Surabaya1 (SUB)", "destinationName": "Indonesia, Manokwari (MKW)" },
            { "origin": "SUB", "destination": "AMI", "originName": "Indonesia, Surabaya1 (SUB)", "destinationName": "Indonesia, Mataram (AMI)" },
            { "origin": "SUB", "destination": "KNO", "originName": "Indonesia, Surabaya1 (SUB)", "destinationName": "Indonesia, Medan , Kuala Namo (KNO)" },
            { "origin": "SUB", "destination": "PDG", "originName": "Indonesia, Surabaya1 (SUB)", "destinationName": "Indonesia, Padang (PDG)" },
            { "origin": "SUB", "destination": "PLM", "originName": "Indonesia, Surabaya1 (SUB)", "destinationName": "Indonesia, Palembang, Sumatera Selatan (PLM)" },
            { "origin": "SUB", "destination": "PGK", "originName": "Indonesia, Surabaya1 (SUB)", "destinationName": "Indonesia, Pangkal Pinang, Bangka-Belitung (PGK)" },
            { "origin": "SUB", "destination": "PKU", "originName": "Indonesia, Surabaya1 (SUB)", "destinationName": "Indonesia, Pekan Baru, Riau (PKU)" },
            { "origin": "SUB", "destination": "PCB", "originName": "Indonesia, Surabaya1 (SUB)", "destinationName": "Indonesia, Pondok Cabe Airport, Jakarta (PCB)" },
            { "origin": "SUB", "destination": "PNK", "originName": "Indonesia, Surabaya1 (SUB)", "destinationName": "Indonesia, Pontianak (PNK)" },
            { "origin": "SUB", "destination": "RTG", "originName": "Indonesia, Surabaya1 (SUB)", "destinationName": "Indonesia, Ruteng (RTG)" },
            { "origin": "SUB", "destination": "SRG", "originName": "Indonesia, Surabaya1 (SUB)", "destinationName": "Indonesia, Semarang, Jawa Tengah (SRG)" },
            { "origin": "SUB", "destination": "RKO", "originName": "Indonesia, Surabaya1 (SUB)", "destinationName": "Indonesia, Sipora (RKO)" },
            { "origin": "SUB", "destination": "SOC", "originName": "Indonesia, Surabaya1 (SUB)", "destinationName": "Indonesia, Solo (SOC)" },
            { "origin": "SUB", "destination": "SUB", "originName": "Indonesia, Surabaya1 (SUB)", "destinationName": "Indonesia, Surabaya1 (SUB)" },
            { "origin": "SUB", "destination": "TJQ", "originName": "Indonesia, Surabaya1 (SUB)", "destinationName": "Indonesia, Tanjung Pandan (TJQ)" },
            { "origin": "SUB", "destination": "JOG", "originName": "Indonesia, Surabaya1 (SUB)", "destinationName": "Indonesia, Yogyakarta (JOG)" },
            { "origin": "SUB", "destination": "MFM", "originName": "Indonesia, Surabaya1 (SUB)", "destinationName": "Macao, Macau (MFM)" },
            { "origin": "SUB", "destination": "JHB", "originName": "Indonesia, Surabaya1 (SUB)", "destinationName": "Malaysia, Johor Bahru (JHB)" },
            { "origin": "SUB", "destination": "KUL", "originName": "Indonesia, Surabaya1 (SUB)", "destinationName": "Malaysia, Kuala Lumpur (KUL)" },
            { "origin": "SUB", "destination": "JED", "originName": "Indonesia, Surabaya1 (SUB)", "destinationName": "Saudi Arabia, Jeddah (JED)" },
            { "origin": "SUB", "destination": "SIN", "originName": "Indonesia, Surabaya1 (SUB)", "destinationName": "Singapore, Singapore (SIN)" },
            { "origin": "SUB", "destination": "ICN", "originName": "Indonesia, Surabaya1 (SUB)", "destinationName": "South Korea, Seoul - Incheon (ICN)" },
            { "origin": "SUB", "destination": "BKK", "originName": "Indonesia, Surabaya1 (SUB)", "destinationName": "Thailand, BANGKOK (BKK)" },
            { "origin": "SUB", "destination": "NAW", "originName": "Indonesia, Surabaya1 (SUB)", "destinationName": "Thailand, Narathiwat (NAW)" },
            { "origin": "TJQ", "destination": "BPN", "originName": "Indonesia, Tanjung Pandan (TJQ)", "destinationName": "Indonesia, Balikpapan (BPN)" },
            { "origin": "TJQ", "destination": "BDJ", "originName": "Indonesia, Tanjung Pandan (TJQ)", "destinationName": "Indonesia, Banjarmasin (BDJ)" },
            { "origin": "TJQ", "destination": "BTH", "originName": "Indonesia, Tanjung Pandan (TJQ)", "destinationName": "Indonesia, Batam (BTH)" },
            { "origin": "TJQ", "destination": "DPS", "originName": "Indonesia, Tanjung Pandan (TJQ)", "destinationName": "Indonesia, Denpasar, Bali (DPS)" },
            { "origin": "TJQ", "destination": "CGK", "originName": "Indonesia, Tanjung Pandan (TJQ)", "destinationName": "Indonesia, Jakarta,Soekarno Hatta (CGK)" },
            { "origin": "TJQ", "destination": "DJB", "originName": "Indonesia, Tanjung Pandan (TJQ)", "destinationName": "Indonesia, Jambi, Paalmerah Airport (DJB)" },
            { "origin": "TJQ", "destination": "LOP", "originName": "Indonesia, Tanjung Pandan (TJQ)", "destinationName": "Indonesia, Lombok, Mataram Nusa Tenggara (LOP)" },
            { "origin": "TJQ", "destination": "MLG", "originName": "Indonesia, Tanjung Pandan (TJQ)", "destinationName": "Indonesia, Malang, Jawa Timur (MLG)" },
            { "origin": "TJQ", "destination": "KNO", "originName": "Indonesia, Tanjung Pandan (TJQ)", "destinationName": "Indonesia, Medan , Kuala Namo (KNO)" },
            { "origin": "TJQ", "destination": "PGK", "originName": "Indonesia, Tanjung Pandan (TJQ)", "destinationName": "Indonesia, Pangkal Pinang, Bangka-Belitung (PGK)" },
            { "origin": "TJQ", "destination": "SRG", "originName": "Indonesia, Tanjung Pandan (TJQ)", "destinationName": "Indonesia, Semarang, Jawa Tengah (SRG)" },
            { "origin": "TJQ", "destination": "SUB", "originName": "Indonesia, Tanjung Pandan (TJQ)", "destinationName": "Indonesia, Surabaya1 (SUB)" },
            { "origin": "TJQ", "destination": "UPG", "originName": "Indonesia, Tanjung Pandan (TJQ)", "destinationName": "Indonesia, Ujungpandang (UPG)" },
            { "origin": "TJQ", "destination": "JOG", "originName": "Indonesia, Tanjung Pandan (TJQ)", "destinationName": "Indonesia, Yogyakarta (JOG)" },
            { "origin": "LUV", "destination": "BDO", "originName": "Indonesia, Tual (LUV)", "destinationName": "Indonesia, Bandung (BDO)" },
            { "origin": "UPG", "destination": "BPN", "originName": "Indonesia, Ujungpandang (UPG)", "destinationName": "Indonesia, Balikpapan (BPN)" },
            { "origin": "UPG", "destination": "BTH", "originName": "Indonesia, Ujungpandang (UPG)", "destinationName": "Indonesia, Batam (BTH)" },
            { "origin": "UPG", "destination": "BKS", "originName": "Indonesia, Ujungpandang (UPG)", "destinationName": "Indonesia, Bengkulu (BKS)" },
            { "origin": "UPG", "destination": "CGK", "originName": "Indonesia, Ujungpandang (UPG)", "destinationName": "Indonesia, Jakarta,Soekarno Hatta (CGK)" },
            { "origin": "UPG", "destination": "DJB", "originName": "Indonesia, Ujungpandang (UPG)", "destinationName": "Indonesia, Jambi, Paalmerah Airport (DJB)" },
            { "origin": "UPG", "destination": "KNO", "originName": "Indonesia, Ujungpandang (UPG)", "destinationName": "Indonesia, Medan , Kuala Namo (KNO)" },
            { "origin": "UPG", "destination": "PDG", "originName": "Indonesia, Ujungpandang (UPG)", "destinationName": "Indonesia, Padang (PDG)" },
            { "origin": "UPG", "destination": "PGK", "originName": "Indonesia, Ujungpandang (UPG)", "destinationName": "Indonesia, Pangkal Pinang, Bangka-Belitung (PGK)" },
            { "origin": "UPG", "destination": "PKU", "originName": "Indonesia, Ujungpandang (UPG)", "destinationName": "Indonesia, Pekan Baru, Riau (PKU)" },
            { "origin": "UPG", "destination": "TJQ", "originName": "Indonesia, Ujungpandang (UPG)", "destinationName": "Indonesia, Tanjung Pandan (TJQ)" },
            { "origin": "UPG", "destination": "WMX", "originName": "Indonesia, Ujungpandang (UPG)", "destinationName": "Indonesia, Wamena (WMX)" },
            { "origin": "UPG", "destination": "JOG", "originName": "Indonesia, Ujungpandang (UPG)", "destinationName": "Indonesia, Yogyakarta (JOG)" },
            { "origin": "JOG", "destination": "HKG", "originName": "Indonesia, Yogyakarta (JOG)", "destinationName": "Hong Kong, HongKong (HKG)" },
            { "origin": "JOG", "destination": "BPN", "originName": "Indonesia, Yogyakarta (JOG)", "destinationName": "Indonesia, Balikpapan (BPN)" },
            { "origin": "JOG", "destination": "BTH", "originName": "Indonesia, Yogyakarta (JOG)", "destinationName": "Indonesia, Batam (BTH)" },
            { "origin": "JOG", "destination": "BKS", "originName": "Indonesia, Yogyakarta (JOG)", "destinationName": "Indonesia, Bengkulu (BKS)" },
            { "origin": "JOG", "destination": "DPS", "originName": "Indonesia, Yogyakarta (JOG)", "destinationName": "Indonesia, Denpasar, Bali (DPS)" },
            { "origin": "JOG", "destination": "HLP", "originName": "Indonesia, Yogyakarta (JOG)", "destinationName": "Indonesia, Jakarta,Halim Perdanakusuma (HLP)" },
            { "origin": "JOG", "destination": "CGK", "originName": "Indonesia, Yogyakarta (JOG)", "destinationName": "Indonesia, Jakarta,Soekarno Hatta (CGK)" },
            { "origin": "JOG", "destination": "DJB", "originName": "Indonesia, Yogyakarta (JOG)", "destinationName": "Indonesia, Jambi, Paalmerah Airport (DJB)" },
            { "origin": "JOG", "destination": "LOP", "originName": "Indonesia, Yogyakarta (JOG)", "destinationName": "Indonesia, Lombok, Mataram Nusa Tenggara (LOP)" },
            { "origin": "JOG", "destination": "KNO", "originName": "Indonesia, Yogyakarta (JOG)", "destinationName": "Indonesia, Medan , Kuala Namo (KNO)" },
            { "origin": "JOG", "destination": "MEQ", "originName": "Indonesia, Yogyakarta (JOG)", "destinationName": "Indonesia, Meulaboh, Aceh, Cut Nyak Dien Airport (MEQ)" },
            { "origin": "JOG", "destination": "PDG", "originName": "Indonesia, Yogyakarta (JOG)", "destinationName": "Indonesia, Padang (PDG)" },
            { "origin": "JOG", "destination": "PGK", "originName": "Indonesia, Yogyakarta (JOG)", "destinationName": "Indonesia, Pangkal Pinang, Bangka-Belitung (PGK)" },
            { "origin": "JOG", "destination": "PKU", "originName": "Indonesia, Yogyakarta (JOG)", "destinationName": "Indonesia, Pekan Baru, Riau (PKU)" },
            { "origin": "JOG", "destination": "SRG", "originName": "Indonesia, Yogyakarta (JOG)", "destinationName": "Indonesia, Semarang, Jawa Tengah (SRG)" },
            { "origin": "JOG", "destination": "SOC", "originName": "Indonesia, Yogyakarta (JOG)", "destinationName": "Indonesia, Solo (SOC)" },
            { "origin": "JOG", "destination": "SUB", "originName": "Indonesia, Yogyakarta (JOG)", "destinationName": "Indonesia, Surabaya1 (SUB)" },
            { "origin": "JOG", "destination": "TJQ", "originName": "Indonesia, Yogyakarta (JOG)", "destinationName": "Indonesia, Tanjung Pandan (TJQ)" },
            { "origin": "JOG", "destination": "UPG", "originName": "Indonesia, Yogyakarta (JOG)", "destinationName": "Indonesia, Ujungpandang (UPG)" },
            { "origin": "AOR", "destination": "SUB", "originName": "Malaysia, Alor Setar (AOR)", "destinationName": "Indonesia, Surabaya1 (SUB)" },
            { "origin": "JHB", "destination": "SUB", "originName": "Malaysia, Johor Bahru (JHB)", "destinationName": "Indonesia, Surabaya1 (SUB)" },
            { "origin": "KCH", "destination": "MNA", "originName": "Malaysia, Kuching (KCH)", "destinationName": "Indonesia, Melangguane (MNA)" },
            { "origin": "LBU", "destination": "PVG", "originName": "Malaysia, Labuan (LBU)", "destinationName": "China, Shanghai (PVG)" },
            { "origin": "LBU", "destination": "KBR", "originName": "Malaysia, Labuan (LBU)", "destinationName": "Malaysia, Kota Bharu (KBR)" },
            { "origin": "PEN", "destination": "AMQ", "originName": "Malaysia, Penang (PEN)", "destinationName": "Indonesia, Ambon (AMQ)" },
            { "origin": "SDK", "destination": "PEK", "originName": "Malaysia, Sandakan (SDK)", "destinationName": "China, Beijing (PEK)" },
            { "origin": "SBW", "destination": "BLR", "originName": "Malaysia, Sibu (SBW)", "destinationName": "India, Bangalore (BLR)" },
            { "origin": "CNX", "destination": "SUB", "originName": "Thailand, Chiang Mai (CNX)", "destinationName": "Indonesia, Surabaya1 (SUB)" },
            { "origin": "KBV", "destination": "KBR", "originName": "Thailand, Krabi (KBV)", "destinationName": "Malaysia, Kota Bharu (KBR)" },
            { "origin": "HKT", "destination": "SUB", "originName": "Thailand, Phuket (HKT)", "destinationName": "Indonesia, Surabaya1 (SUB)" },
            { "origin": "SGN", "destination": "DMK", "originName": "Vietnam, Ho Chi Minh City - Saigon (SGN)", "destinationName": "Thailand, Bangkok - Don Mueang (DMK)" }
        ]
    };

    return {
        step: 'search',
        loading: false,
        loadingText: 'Mohon tunggu...',
        viewMode: 'depart',
        flights: [],
        returnFlights: [],
        allReturnFlightsBackup: [],
        originalDepartFlights: [],
        selectedFlight: null,
        selectedReturnFlight: null,
        validatedPriceDepart: 0,
        validatedPriceReturn: 0,
        validatedTotalPrice: 0,
        priceResult: null,
        airlines: [],
        toast: { show: false, message: '', type: 'info' },
        addonsData: [],
        apiJagel: 'wxo6DiWJ2kaZ4sjk6Dv0Ld0Iea2l649YhutdoTSnBOe3YD5Lwz',
        usernameJagel: usernameDitemukan,
        urlDepositJagel: detectedDeposit,
        biayaAdminJagel: 0,
        showFareModal: false,
        showDetailPrice: false,
        selectedFareIndex: 0,
        modalStep: 'select-class',
        tempFareList: [],
        currentPriceDetail: { tax: 0, totalFare: 0, ticketPrice: 0 },
        targetFlight: null,
        isDetailFetched: false,
        selectedSeats: {},
        selectedBaggage: {},
        selectedMeals: {},
        seatResult: null,
        seatMap: [],
        activeSeatSegment: 0,
        activePaxIndex: 0,

        search: {
            tripType: 'OneWay',
            origin: 'CGK', originName: 'Jakarta (CGK)',
            destination: 'SUB', destinationName: 'Surabaya1 (SUB)',
            airlineID: '',
            departDate: defaultDepartDate,
            departDateLabel: defaultDepartLabel,
            returnDate: '',
            returnDateLabel: '',
        },
        paxCount: { adult: 1, child: 0, infant: 0 },
        contactData: { email: '', phone: '' },
        passengers: [{ firstName: '', lastName: '', title: 'Mr', selectedSeat: '', idNumber: '', birthDate: '1995-01-01' }],
        bookingResult: null,
        bookingResultReturn: null,
        airports: [],
        modalTarget: '',
        searchCity: '',
        filterTransit: 'all',
        activeModalType: '', // Inisialisasi awal
        showCalendar: false,
        showConfirmModal: false,
        isSaldoCukup: true,
        saldoDibutuhkan: 0,
        totalBayarJagel: 0,
        nilaiDiskon: 0,


        init() {
            console.log("Username yang terdeteksi:", this.usernameJagel);
            this.fetchAirlineList();
            this.initRoutes(); // Panggil fungsi inisialisasi rute lokal
            this.generateCalendar();
            this.$nextTick(() => {
                if (typeof lucide !== 'undefined') lucide.createIcons();
            });
        },

        resetState() {
            this.selectedFlight = null;
            this.selectedReturnFlight = null;
            this.priceResult = null;
            this.bookingResult = null;
            this.bookingResultReturn = null;
            this.tempFareList = [];
            this.validatedPriceDepart = 0;
            this.validatedPriceReturn = 0;
            this.originalDepartFlights = [];
            this.allReturnFlightsBackup = [];
            this.viewMode = 'depart';
            this.filterTransit = 'all';
        },

        initRoutes() {
            this.loading = true;
            const map = new Map();
            const uniqueAirports = [];

            const parseName = (fullName, code) => {
                if (!fullName) return { city: 'Unknown', name: code };
                const parts = fullName.split(',');
                const cityPart = parts.length > 1 ? parts[1].trim() : parts[0].trim();
                const cleanCity = cityPart.replace(/\s*\([^)]*\)/, "");
                return { city: cleanCity, name: fullName };
            };

            localRouteData.routes.forEach(route => {
                // Proses Origin
                if (!map.has(route.origin)) {
                    map.set(route.origin, true);
                    const info = parseName(route.originName, route.origin);
                    uniqueAirports.push({ code: route.origin, city: info.city, name: info.name });
                }

                // Proses Destination
                if (!map.has(route.destination)) {
                    map.set(route.destination, true);
                    const info = parseName(route.destinationName, route.destination);
                    uniqueAirports.push({ code: route.destination, city: info.city, name: info.name });
                }
            });

            this.airports = uniqueAirports.sort((a, b) => a.city.localeCompare(b.city));
            this.loading = false;
        },

        filteredAirports() {
            let list = this.airports;

            // Sembunyikan Origin dari list jika sedang memilih Destination
            if (this.modalTarget === 'destination' && this.search.origin) {
                list = list.filter(port => port.code !== this.search.origin);
            }

            // Sembunyikan Destination dari list jika sedang memilih Origin
            if (this.modalTarget === 'origin' && this.search.destination) {
                list = list.filter(port => port.code !== this.search.destination);
            }

            if (!this.searchCity) return list;

            const q = this.searchCity.toLowerCase();
            return list.filter(port =>
                port.city.toLowerCase().includes(q) ||
                port.code.toLowerCase().includes(q) ||
                port.name.toLowerCase().includes(q)
            );
        },

        selectAirport(port) {
            // 1. Validasi: Cek jika Origin sama dengan Destination
            const isSameAsOrigin = this.modalTarget === 'destination' && port.code === this.search.origin;
            const isSameAsDestination = this.modalTarget === 'origin' && port.code === this.search.destination;

            if (isSameAsOrigin || isSameAsDestination) {
                // Tampilkan pesan error menggunakan objek toast Anda
                this.toast = {
                    show: true,
                    message: 'Asal dan Tujuan tidak boleh sama!',
                    type: 'error' // sesuaikan dengan CSS toast Anda (error/danger)
                };

                // Hilangkan toast otomatis setelah 3 detik
                setTimeout(() => { this.toast.show = false; }, 3000);

                return; // Hentikan eksekusi (Modal tidak tertutup)
            }

            // 2. Jika Valid: Set data seperti biasa
            if (this.modalTarget === 'origin') {
                this.search.origin = port.code;
                this.search.originName = `${port.city} (${port.code})`;
            } else {
                this.search.destination = port.code;
                this.search.destinationName = `${port.city} (${port.code})`;
            }

            // 3. Reset UI Modal
            this.showRouteModal = false;
            this.searchCity = '';
        },

        async fetchAirlineList() {
            try {
                const res = await fetch('https://darma.siappgo.id/api/flights/airline-list', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' }
                });
                const data = await res.json();
                if (data.status === "SUCCESS") {
                    this.airlines = (data.airlines || []).map(a => ({ id: a.id, name: a.name }));
                }
            } catch (e) {
                console.error("Fetch Airline List Error:", e);
            }
        },


        filteredFlights() {
            let list = this.viewMode === 'depart' ? this.flights : this.returnFlights;
            if (!list) return [];

            if (this.filterTransit === 'all') return list;

            return list.filter(f => {
                // Deteksi Transit dari 2 kemungkinan struktur API
                const isTransit = f.segment.length > 1 || f.segment[0].flightDetail.length > 1;

                if (this.filterTransit === 'direct') return !isTransit;
                if (this.filterTransit === 'transit') return isTransit;
                return true;
            });
        },

        getTransitInfo(f) {
            let stops = 0;
            // Cek struktur segment (API Permaskapai)
            if (f.segment.length > 1) {
                stops = f.segment.length - 1;
            }
            // Cek struktur flightDetail (API Semua Maskapai)
            else if (f.segment[0].flightDetail.length > 1) {
                stops = f.segment[0].flightDetail.length - 1;
            }

            return stops > 0 ? stops + ' Transit' : 'Langsung';
        },

        async searchFlights() {
            // --- 1. VALIDASI AWAL ---
            if (!this.search.origin || !this.search.destination) {
                this.showToast("Silakan pilih kota asal dan tujuan terlebih dahulu", "error");
                return;
            }

            if (this.search.origin === this.search.destination) {
                this.showToast("Asal dan Tujuan tidak boleh sama!", "error");
                return;
            }

            // --- 2. PERSIAPAN STATE ---
            this.resetState();
            this.loading = true;
            this.loadingText = 'Mohon tunggu...';
            this.step = 'list';
            this.viewMode = 'depart';
            window.scrollTo(0, 0);

            const paxParam = `&paxAdult=${this.paxCount.adult}&paxChild=${this.paxCount.child}&paxInfant=${this.paxCount.infant}`;
            const returnDateParam = this.search.tripType === 'RoundTrip' ? `&returnDate=${this.search.returnDate}` : '';
            const commonParams = `origin=${this.search.origin}&destination=${this.search.destination}&departDate=${this.search.departDate}&tripType=${this.search.tripType}${returnDateParam}${paxParam}`;

            const isStreamingMode = !this.search.airlineID || this.search.airlineID === "";

            let url = isStreamingMode
                ? `https://darma.siappgo.id/api/flights/get-all-schedules?${commonParams}`
                : `https://darma.siappgo.id/api/flights/schedules?airlineID=${this.search.airlineID}&${commonParams}`;

            try {
                const response = await fetch(url);
                if (!response.ok) throw new Error("Gagal terhubung ke server");

                // --- A. HANDLING MODE STREAMING (ALL AIRLINES) ---
                if (isStreamingMode) {
                    const reader = response.body.getReader();
                    const decoder = new TextDecoder();

                    while (true) {
                        const { value, done } = await reader.read();
                        if (done) break;

                        const chunk = decoder.decode(value);
                        const lines = chunk.split('\n');

                        for (let line of lines) {
                            if (!line.startsWith('data: ')) continue;
                            const jsonData = JSON.parse(line.replace('data: ', ''));

                            if (jsonData.status === "PARTIAL") {
                                let hasNewData = false;

                                if (jsonData.journeyDepart && jsonData.journeyDepart.length > 0) {
                                    this.flights = [...this.flights, ...jsonData.journeyDepart];
                                    this.flights.sort((a, b) => (a.sumPrice || 0) - (b.sumPrice || 0));
                                    this.originalDepartFlights = [...this.flights];
                                    hasNewData = true;
                                }

                                if (this.search.tripType === 'RoundTrip' && jsonData.journeyReturn && jsonData.journeyReturn.length > 0) {
                                    this.returnFlights = [...this.returnFlights, ...jsonData.journeyReturn];
                                    this.returnFlights.sort((a, b) => (a.sumPrice || 0) - (b.sumPrice || 0));
                                    hasNewData = true;
                                }

                                // --- PERBAIKAN: Matikan loading begitu data pertama masuk ---
                                if (hasNewData && this.loading) {
                                    this.loading = false;
                                }
                            }

                            if (jsonData.status === "COMPLETED") {
                                this.loading = false; // Pastikan loading mati saat selesai
                                if (this.flights.length === 0) {
                                    this.showToast("Jadwal tidak ditemukan", "info");
                                }
                            }

                            if (jsonData.status === "ERROR") {
                                throw new Error(jsonData.message || "Gagal mengambil jadwal");
                            }
                        }
                        this.$nextTick(() => window.lucide?.createIcons());
                    }
                }

                // --- B. HANDLING MODE REGULAR (SINGLE AIRLINE) ---
                else {
                    const data = await response.json();
                    if (data.status === "SUCCESS" || data.data) {
                        this.flights = (data.data || []).sort((a, b) => (a.sumPrice || 0) - (b.sumPrice || 0));
                        this.originalDepartFlights = [...this.flights];

                        if (this.search.tripType === 'RoundTrip') {
                            this.returnFlights = (data.dataReturn || []).sort((a, b) => (a.sumPrice || 0) - (b.sumPrice || 0));
                            this.allReturnFlightsBackup = [...this.returnFlights];
                        }

                        if (this.flights.length === 0) throw new Error("Jadwal tidak tersedia untuk maskapai ini.");
                        this.loading = false;
                    } else {
                        throw new Error(data.respMessage || "Gagal mengambil jadwal");
                    }
                    this.$nextTick(() => window.lucide?.createIcons());
                }

            } catch (e) {
                console.error("Search Error:", e);
                this.loading = false;
                // Hanya balikkan ke step search jika list benar-benar kosong
                if (this.flights.length === 0) {
                    this.step = 'search';
                }
                this.showToast(e.message, "error");
            }
        },



        async selectFlight(f) {
            this.openFareModal(f);
        },

        async openFareModal(flight) {
            this.targetFlight = flight;
            // Ambil daftar kelas dari segmen pertama
            this.tempFareList = flight.segment[0].availableDetail;
            this.selectedFareIndex = 0;
            this.modalStep = 'select-class';
            this.showFareModal = true;
            this.$nextTick(() => { if (window.lucide) window.lucide.createIcons(); });
        },

        async processToPriceDetail() {
            this.loading = true;
            this.loadingText = "Mengecek ketersediaan harga...";
            try {
                // Simpan sementara kelas yang diklik user ke targetFlight
                const chosenClassObj = this.tempFareList[this.selectedFareIndex];
                this.targetFlight.chosenFare = chosenClassObj;

                let res = (this.selectedFlight && this.search.tripType === 'RoundTrip')
                    ? await this.hitPriceAPI(this.selectedFlight, this.targetFlight, "RoundTrip")
                    : await this.hitPriceAPI(this.targetFlight, null, "OneWay");

                if (res.status === "SUCCESS") {
                    // Ambil rincian harga dari segmen pergi
                    this.currentPriceDetail = res.priceDepart[0].priceDetail[0];
                    this.modalStep = 'detail-price';
                } else {
                    throw new Error(res.respMessage || "Gagal mendapatkan harga terbaru.");
                }
            } catch (e) {
                this.showToast(e.message, "error");
            } finally {
                this.loading = false;
            }
        },

        async confirmFareSelection() {
            this.showFareModal = false;
            const chosenFare = this.tempFareList[this.selectedFareIndex];

            // Logika untuk RoundTrip - Tahap pemilihan rute pergi
            if (this.search.tripType === 'RoundTrip' && this.viewMode === 'depart') {
                // Simpan rute pergi beserta kelas pilihannya
                this.selectedFlight = { ...this.targetFlight, chosenFare: chosenFare };

                const selectedAirlineID = this.selectedFlight.airlineID || this.selectedFlight.segment[0].flightDetail[0].airlineCode;
                const filteredReturns = this.allReturnFlightsBackup.filter(item => {
                    const itemAirlineID = item.airlineID || item.segment[0].flightDetail[0].airlineCode;
                    return itemAirlineID === selectedAirlineID;
                });

                this.flights = filteredReturns.length > 0 ? [...filteredReturns] : [...this.allReturnFlightsBackup];
                this.viewMode = 'return';
                this.showToast(`Rute pergi terpilih (${chosenFare.flightClass}). Silakan pilih rute pulang.`);
                window.scrollTo(0, 0);
                return;
            }

            // Finalisasi Seleksi (OneWay atau Tahap Pulang RoundTrip)
            this.loading = true;
            this.loadingText = "Menyiapkan ringkasan pesanan...";

            if (this.search.tripType === 'RoundTrip') {
                this.selectedReturnFlight = { ...this.targetFlight, chosenFare: chosenFare };
            } else {
                this.selectedFlight = { ...this.targetFlight, chosenFare: chosenFare };
            }

            try {
                const res = await this.hitPriceAPI(this.selectedFlight, this.selectedReturnFlight, this.search.tripType);
                if (res.status === "SUCCESS") {
                    // Update data harga global
                    this.priceResult = res;
                    this.validatedTotalPrice = res.sumFare + (this.biayaAdminJagel || 0);

                    // Pindah ke step review
                    this.step = 'review';
                    window.scrollTo(0, 0);
                } else {
                    throw new Error(res.respMessage);
                }
            } catch (e) {
                this.showToast(e.message, "error");
            } finally {
                this.loading = false;
            }
        },

        buildSegmentsForPrice(flight) {
            if (!flight) return [];
            return flight.segment.flatMap(seg => {
                // Prioritas: chosenFare (pilihan user) > data segmen pertama
                const selected = flight.chosenFare || seg.availableDetail[0];

                return seg.flightDetail.map(detail => {
                    return {
                        airlineCode: detail.airlineCode,
                        flightNumber: detail.flightNumber.trim(),
                        schOrigin: detail.fdOrigin,
                        schDestination: detail.fdDestination,
                        // Gunakan subClass (misal 'N') untuk Citilink/Lion Group agar presisi
                        detailSchedule: selected.subClass || selected.classiId,
                        schDepartTime: this.formatToLocalAPI(detail.fdDepartTime),
                        schArrivalTime: this.formatToLocalAPI(detail.fdArrivalTime),
                        // Pastikan hanya mengirim 1 karakter huruf kelas
                        flightClass: (selected.flightClass || selected.classiId).toString().substring(0, 1).toUpperCase(),
                        garudaNumber: "",
                        garudaAvailability: ""
                    };
                });
            });
        },

        async hitPriceAPI(f1, f2, type) {
            if (!f1) return { status: "FAILED", respMessage: "Flight data missing" };

            const isAllAirlineMode = !this.search.airlineID || this.search.airlineID === "";
            let apiAirlineCode = f1.airlineID || f1.segment[0].flightDetail[0].airlineCode;
            let finalAirlineID = apiAirlineCode;

            // Normalisasi Airline ID untuk Citilink & Lion Group
            if (['XT', 'AK', 'FD'].includes(apiAirlineCode)) finalAirlineID = 'QZ';
            if (['JT', 'ID', 'IW'].includes(apiAirlineCode)) {
                finalAirlineID = (this.search.airlineID && ['JT', 'ID', 'IW'].includes(this.search.airlineID)) ? this.search.airlineID : 'JT';
            }

            let url = isAllAirlineMode ? 'https://darma.siappgo.id/api/flights/get-all-price' : 'https://darma.siappgo.id/api/flights/get-price';

            // Siapkan Segmen
            const schDeparts = this.buildSegmentsForPrice(f1);
            const schReturns = f2 ? this.buildSegmentsForPrice(f2) : [];

            let body = isAllAirlineMode ? {
                airlineID: f1.airlineID,
                origin: this.search.origin,
                destination: this.search.destination,
                tripType: type,
                departDate: this.formatToLocalAPI(this.search.departDate),
                returnDate: (type === 'RoundTrip' ? this.formatToLocalAPI(this.search.returnDate) : "0001-01-01T00:00:00Z"),
                paxAdult: this.paxCount.adult,
                paxChild: this.paxCount.child,
                paxInfant: this.paxCount.infant,
                airlineAccessCode: null,
                journeyDepartReference: f1.journeyReference,
                journeyReturnReference: f2 ? f2.journeyReference : null
            } : {
                airlineID: finalAirlineID,
                origin: this.search.origin,
                destination: this.search.destination,
                tripType: type,
                departDate: this.formatToLocalAPI(this.search.departDate),
                returnDate: (type === 'RoundTrip' ? this.formatToLocalAPI(this.search.returnDate) : "0001-01-01T00:00:00Z"),
                paxAdult: this.paxCount.adult,
                paxChild: this.paxCount.child,
                paxInfant: this.paxCount.infant,
                schDeparts: schDeparts,
                schReturns: schReturns,
                userID: "CF0X64HBR8"
            };

            try {
                const res = await fetch(url, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(body)
                });
                return await res.json();
            } catch (e) {
                return { status: "FAILED", respMessage: "Gagal terhubung ke server harga" };
            }
        },

        // --- 5. ADDONS & BOOKING ---
        async processAddonsAndSeats() {
            this.loading = true;
            try {
                const isRT = this.search.tripType === 'RoundTrip';
                const fDep = this.priceResult.priceDepart[0];

                // Ambil airlineID dari priceResult untuk validasi API
                const airlineID = this.priceResult.airlineID || (this.selectedFlight ? this.selectedFlight.airlineID : "QG");
                const fullPhone = this.contactData.phone.replace(/[^\d]/g, '');

                const payload = {
                    airlineID: airlineID,
                    origin: this.priceResult.origin,
                    destination: this.priceResult.destination,
                    tripType: this.priceResult.tripType,
                    departDate: this.formatToLocalAPI(this.priceResult.departDate),
                    returnDate: isRT ? this.formatToLocalAPI(this.priceResult.returnDate) : "0001-01-01T00:00:00Z",
                    schDepart: fDep.classFare || this.priceResult.journeyDepartReference,
                    schReturn: isRT ? (this.priceResult.priceReturn[0].classFare || this.priceResult.journeyReturnReference) : "",
                    paxAdult: parseInt(this.priceResult.paxAdult),
                    paxChild: parseInt(this.priceResult.paxChild),
                    paxInfant: parseInt(this.priceResult.paxInfant),
                    departureAirlineSegmentCode: fDep.airlineSegmentCode || "",
                    departureFareBasisCode: fDep.classFare || "",
                    returnAirlineSegmentCode: isRT ? this.priceResult.priceReturn[0].airlineSegmentCode : "",
                    returnFareBasisCode: isRT ? this.priceResult.priceReturn[0].classFare : "",
                    contactFirstName: this.passengers[0].firstName.toUpperCase(),
                    contactLastName: (this.passengers[0].lastName || this.passengers[0].firstName).toUpperCase(),
                    contactTitle: (this.passengers[0].title || "MR").toUpperCase(),
                    contactCountryCodePhone: "62",
                    contactAreaCodePhone: "62",
                    contactRemainingPhoneNo: "62",
                    contactEmail: this.contactData.email,
                    paxDetails: this.passengers.map(p => {
                        const adultIdx = this.passengers.findIndex(px => parseInt(px.type) === 0);
                        return {
                            IDNumber: p.idNumber || p.IDNumber || "",
                            title: p.title.toUpperCase(),
                            firstName: p.firstName.toUpperCase(),
                            lastName: (p.lastName || p.firstName).toUpperCase(),
                            birthDate: this.formatToLocalAPI(p.birthDate),
                            gender: p.gender === "Male" ? "Male" : "Female",
                            nationality: "ID",
                            birthCountry: "ID",
                            DocType: "KTP",
                            parent: parseInt(p.type) === 2 ? (adultIdx + 1).toString() : "",
                            Email: this.contactData.email,
                            type: parseInt(p.type),
                            passportNumber: "",
                            passportIssuedCountry: "",
                            passportIssuedDate: "0001-01-01T00:00:00Z",
                            passportExpiredDate: "0001-01-01T00:00:00Z"
                        };
                    }),
                    insurance: true,
                    userID: "CF0X64HBR8",
                    accessToken: this.priceResult.accessToken || ""
                };

                const [resAdd, resSea] = await Promise.all([
                    fetch('https://darma.siappgo.id/api/flights/get-addons', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) }),
                    fetch('https://darma.siappgo.id/api/flights/get-seats', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
                ]);

                const dAdd = await resAdd.json();
                const dSea = await resSea.json();

                if (dAdd.status === "SUCCESS") {
                    this.addonsData = dAdd.addOns;
                    this.seatMap = dSea.seatAddOns?.[0]?.infos.filter(s => s.assignable) || [];
                    this.step = 'addons';
                    window.scrollTo(0, 0);
                } else {
                    throw new Error(dAdd.respMessage);
                }
            } catch (e) {
                this.showToast(e.message, "error");
            } finally {
                this.loading = false;
            }
        },
        prepareSinglePayload(type) {
            const isReturn = type === "return";
            const currentSIdx = isReturn ? 1 : 0;

            let priceData = isReturn ? (this.priceResultReturn || this.priceResult) : this.priceResult;
            let flight = isReturn ? this.selectedReturnFlight : this.selectedFlight;

            if (!priceData || !flight) return null;

            const priceSegments = (isReturn && this.priceResultReturn)
                ? priceData.priceDepart
                : (isReturn ? priceData.priceReturn : priceData.priceDepart);

            if (!priceSegments || priceSegments.length === 0) return null;

            const finalAirlineID = priceData.airlineID || flight.airlineID || "QG";
            let baseReference = isReturn ? priceData.journeyReturnReference : priceData.journeyDepartReference;

            const mappedSegments = priceSegments.map((priceSeg) => {
                const cleanFlightNum = priceSeg.flightNumber.replace(/[^\d]/g, '');
                let actualArrive = priceSeg.psDate;

                if (flight.segment) {
                    flight.segment.forEach(s => {
                        if (s.flightDetail) {
                            const found = s.flightDetail.find(fd => fd.flightNumber.replace(/[^\d]/g, '') === cleanFlightNum);
                            if (found) actualArrive = found.fdArrivalTime;
                        }
                    });
                }

                let rawClass = priceSeg.classFare || priceSeg.flightClass || "Y";
                let cleanClass = rawClass.toString().includes('~') ? rawClass.split('~')[1] : rawClass.substring(0, 1).toUpperCase();

                return {
                    airlineCode: (priceSeg.airlineCode || finalAirlineID).substring(0, 2).toUpperCase(),
                    flightNumber: cleanFlightNum,
                    schOrigin: priceSeg.psOrigin,
                    schDestination: priceSeg.psDestination,
                    detailSchedule: priceSeg.classFare || baseReference,
                    schDepartTime: this.formatToLocalAPI(priceSeg.psDate),
                    schArrivalTime: this.formatToLocalAPI(actualArrive),
                    flightClass: cleanClass,
                    garudaNumber: "",
                    garudaAvailability: ""
                };
            });

            const fullPhone = this.contactData.phone.replace(/[^\d]/g, '');

            return {
                airlineID: finalAirlineID,
                origin: mappedSegments[0].schOrigin,
                destination: mappedSegments[mappedSegments.length - 1].schDestination,
                tripType: "OneWay",
                departDate: this.formatToLocalAPI(isReturn ? this.search.returnDate : this.search.departDate),
                returnDate: "0001-01-01T00:00:00Z",
                paxAdult: parseInt(this.paxCount.adult),
                paxChild: parseInt(this.paxCount.child) || 0,
                paxInfant: parseInt(this.paxCount.infant) || 0,
                schDeparts: mappedSegments,
                schReturns: [],
                // ... (data kontak tetap sama) ...
                contactFirstName: this.passengers[0].firstName.toUpperCase(),
                contactLastName: (this.passengers[0].lastName || this.passengers[0].firstName).toUpperCase(),
                contactTitle: this.passengers[0].title.toUpperCase(),
                contactCountryCodePhone: "62",
                contactAreaCodePhone: fullPhone.substring(0, 3),
                contactRemainingPhoneNo: fullPhone.substring(3),
                contactEmail: this.contactData.email,
                paxDetails: this.passengers.map((p, pIdx) => {
                    const isInfant = parseInt(p.type) === 2;
                    const addonKey = pIdx + '_' + currentSIdx; // Menggunakan index segment yang benar

                    let currentAddOns = [];
                    if (!isInfant) {
                        // LOGIKA PROTEKSI: Jangan biarkan baggageString kosong untuk rute pulang
                        let baggage = this.selectedBaggage[addonKey] || "";

                        // Jika AirAsia (QZ) dan kosong, beri default promo/min baggage code
                        if (finalAirlineID === 'QZ' && baggage === "") {
                            baggage = "PBAB";
                        }

                        currentAddOns = [{
                            aoOrigin: mappedSegments[0].schOrigin,
                            aoDestination: mappedSegments[mappedSegments.length - 1].schDestination,
                            baggageString: baggage,
                            meals: this.selectedMeals[addonKey] || [],
                            // Mengambil kursi berdasarkan index segment (0 untuk Depart, 1 untuk Return)
                            seat: (p.selectedSeats && p.selectedSeats[currentSIdx]) ? p.selectedSeats[currentSIdx] : "",
                            compartment: mappedSegments[0].flightClass
                        }];
                    }

                    return {
                        IDNumber: p.idNumber || p.IDNumber || "",
                        title: p.title.toUpperCase(),
                        firstName: p.firstName.toUpperCase(),
                        lastName: (p.lastName || p.firstName).toUpperCase(),
                        birthDate: this.formatToLocalAPI(p.birthDate),
                        gender: p.gender || "Male",
                        nationality: "ID",
                        birthCountry: "ID",
                        DocType: "KTP",
                        parent: isInfant ? "1" : "",
                        Email: this.contactData.email,
                        type: parseInt(p.type),
                        passportNumber: "",
                        passportIssuedCountry: "",
                        passportIssuedDate: "0001-01-01T00:00:00Z",
                        passportExpiredDate: "0001-01-01T00:00:00Z",
                        addOns: currentAddOns
                    };
                }),
                searchKey: priceData.searchKey || "",
                insurance: true,

            };
        },
        async createBooking() {
            this.loading = true;
            this.loadingText = "Mendaftarkan Reservasi...";
            try {
                const isRT = this.search.tripType === 'RoundTrip';
                const isSame = isRT && this.selectedFlight?.airlineID === this.selectedReturnFlight?.airlineID;


                const currentOperator = this.usernameJagel;

                if (isSame) {
                    const dep = this.prepareSinglePayload("depart");
                    const ret = this.prepareSinglePayload("return");

                    let payload = {
                        ...dep,
                        tripType: "RoundTrip",
                        returnDate: this.formatToLocalAPI(this.search.returnDate),
                        schReturns: ret.schDeparts,
                        // TAMBAHKAN INI: Agar tersimpan di kolom 'pengguna' database
                        usernameFromFrontend: currentOperator
                    };

                    // Sinkronisasi AddOns Pulang ke dalam paxDetails
                    payload.paxDetails.forEach((pax, idx) => {
                        if (pax.type !== 2) {
                            const returnAddOn = ret.paxDetails[idx].addOns[0];
                            pax.addOns.push(returnAddOn);
                        }
                    });

                    const res = await fetch('https://darma.siappgo.id/api/flights/create-booking', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(payload)
                    });
                    this.bookingResult = await res.json();
                    if (this.bookingResult.status !== "SUCCESS") throw new Error(this.bookingResult.respMessage);

                } else {
                    // Split Booking
                    const dep = this.prepareSinglePayload("depart");

                    // TAMBAHKAN INI pada payload keberangkatan
                    const depPayload = { ...dep, usernameFromFrontend: currentOperator };

                    const resDep = await fetch('https://darma.siappgo.id/api/flights/create-booking', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(depPayload)
                    });
                    this.bookingResult = await resDep.json();
                    if (this.bookingResult.status !== "SUCCESS") throw new Error(this.bookingResult.respMessage);

                    if (isRT) {
                        const ret = this.prepareSinglePayload("return");

                        // TAMBAHKAN INI pada payload kepulangan
                        const retPayload = { ...ret, usernameFromFrontend: currentOperator };

                        const resRet = await fetch('https://darma.siappgo.id/api/flights/create-booking', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify(retPayload)
                        });
                        this.bookingResultReturn = await resRet.json();
                    }
                }
                this.step = 'success';
                window.scrollTo(0, 0);
            } catch (e) {
                this.showToast(e.message, "error");
            } finally {
                this.loading = false;
            }
        },

        async confirmIssued() {
            try {
                if (!this.bookingDetail) return;
                this.loading = true;

                // 1. Ambil data dari adminFee
                const fee = this.bookingDetail.adminFee;
                const ticketPrice = fee.ticketPrice || 0;
                const salesPrice = fee.salesPrice || 0;
                const adminJagel = this.biayaAdminJagel || 0;

                // 2. Hitung Komisi & Diskon (50%)
                const komisi = ticketPrice - salesPrice;
                this.nilaiDiskon = Math.floor(komisi * 0.5); // Diskon 50% dari komisi

                // 3. Hitung Total Tagihan Akhir yang dipotong ke User
                // Rumus: (Harga Tiket + Admin) - Potongan Diskon
                this.totalBayarJagel = Math.ceil((ticketPrice + adminJagel) - this.nilaiDiskon);

                // 4. Cek Saldo ke Jagel
                const userJagel = this.usernameJagel;
                const resBal = await fetch(`https://api.jagel.id/v1/balance/check?type=username&value=${userJagel}&apikey=${this.apiJagel}`);
                const dataBal = await resBal.json();

                if (dataBal.success && dataBal.data) {
                    const saldoAktif = parseFloat(dataBal.data.balance_active);
                    this.isSaldoCukup = saldoAktif >= this.totalBayarJagel;
                    if (!this.isSaldoCukup) {
                        this.saldoDibutuhkan = this.totalBayarJagel - saldoAktif;
                    }

                    this.showConfirmModal = true;
                    this.$nextTick(() => { if (typeof lucide !== 'undefined') lucide.createIcons(); });
                }
            } catch (e) {
                this.showToast("Gagal memverifikasi saldo", "error");
            } finally {
                this.loading = false;
            }
        },
        async issueTicket() {
            this.showConfirmModal = false;
            this.loading = true;
            this.loadingText = "Menerbitkan tiket...";

            try {
                const userJagel = this.usernameJagel;

                // API Issued Darmawisata
                const res = await fetch('https://darma.siappgo.id/api/flights/issued-ticket', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        airlineID: this.bookingDetail.airlineID,
                        origin: this.bookingDetail.origin.substring(0, 3),
                        destination: this.bookingDetail.destination.substring(0, 3),
                        tripType: this.bookingDetail.tripType,
                        departDate: this.bookingDetail.departDate,
                        returnDate: this.bookingDetail.returnDate,
                        bookingCode: this.bookingDetail.bookingCode,
                        bookingDate: this.bookingDetail.bookingDate.split('.')[0],
                        airlineAccessCode: this.bookingDetail.airlineID,
                        userID: "CF0X64HBR8"
                    })
                });
                const result = await res.json();

                if (result.status === "SUCCESS") {
                    // Potong Saldo Jagel (Nilai Akhir setelah Diskon)
                    await fetch('https://api.jagel.id/v1/balance/adjust', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            type: 'username', value: userJagel, apikey: this.apiJagel,
                            amount: -this.totalBayarJagel,
                            note: `Issued ${this.bookingDetail.bookingCode} Disc: ${this.nilaiDiskon}`
                        })
                    });

                    // Kirim Pesan Chat (Format sesuai dokumentasi Jagel)
                    await fetch('https://api.jagel.id/v1/message/send', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            apikey: this.apiJagel, type: 'username', value: userJagel,
                            content: `Tiket Berhasil Terbit!\n\nKode: ${this.bookingDetail.bookingCode}\nTotal: Rp ${this.totalBayarJagel.toLocaleString('id-ID')}\n(Hemat Diskon: Rp ${this.nilaiDiskon.toLocaleString('id-ID')})`
                        })
                    });

                    this.bookingDetail.ticketStatus = "TICKETED";
                    this.showToast("Tiket Berhasil Terbit!", "success");
                    if (typeof this.getDetail === 'function') await this.getDetail();
                } else {
                    throw new Error(result.respMessage || "Gagal issued.");
                }
            } catch (e) {
                this.showToast(e.message, "error");
            } finally {
                this.loading = false;
            }
        },
        async getDetail() {
            if (!this.bookingResult?.bookingCode) return;

            this.loading = true;
            try {
                const res = await fetch('https://darma.siappgo.id/api/flights/booking-detail', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        bookingCode: this.bookingResult.bookingCode,
                        referenceNo: this.bookingResult.referenceNo,
                        bookingDate: this.bookingResult.bookingDate.split('.')[0]
                    })
                });

                const r = await res.json();

                if (r.status === "SUCCESS") {
                    // --- LOGIKA PENYELAMATAN DATA ---
                    // Jika r.flightDeparts kosong, kita gunakan data dari this.bookingResult (hasil create booking)
                    const savedDeparts = (r.flightDeparts && r.flightDeparts.length > 0)
                        ? r.flightDeparts
                        : this.bookingResult.flightDeparts;

                    const savedReturns = (r.flightReturns && r.flightReturns.length > 0)
                        ? r.flightReturns
                        : this.bookingResult.flightReturns;

                    this.bookingDetail = {
                        ...r,
                        flightDeparts: savedDeparts, // Sekarang jam & nomor pesawat aman
                        flightReturns: savedReturns,
                        totalTicketFinal: r.adminFee ? r.adminFee.ticketPriceIDR : 0
                    };

                    this.isDetailFetched = true;
                }
            } catch (e) {
                console.error("Error refresh detail:", e);
            } finally {
                this.loading = false;
                this.$nextTick(() => { if (typeof lucide !== 'undefined') lucide.createIcons(); });
            }
        },

        // --- 2. HELPER: FORMATTING & CALCULATIONS ---
        formatToLocalAPI(dateStr) {
            if (!dateStr || dateStr.startsWith('0001')) return "0001-01-01T00:00:00Z";
            let clean = dateStr.split('.')[0].replace('Z', '').replace(' ', 'T');
            if (clean.length === 10) clean += "T00:00:00";
            return clean + "Z";
        },

        calculateManualTotal(priceArray) {
            if (!priceArray || priceArray.length === 0) return 0;

            return priceArray.reduce((total, seg) => {
                // Ambil harga per tipe penumpang dari array priceDetail
                const adultFare = seg.priceDetail.find(p => p.paxType === 'Adult')?.totalFare || 0;
                const childFare = seg.priceDetail.find(p => p.paxType === 'Child')?.totalFare || 0;
                const infantFare = seg.priceDetail.find(p => p.paxType === 'Infant')?.totalFare || 0;

                // Kalikan masing-masing harga dengan jumlah pax yang diinput user
                const totalPerSegmen =
                    (adultFare * this.paxCount.adult) +
                    (childFare * this.paxCount.child) +
                    (infantFare * this.paxCount.infant);

                return total + totalPerSegmen;
            }, 0);
        },

        showToast(msg, type = 'info') {
            this.toast = { show: true, message: msg, type: type };
            setTimeout(() => { this.toast.show = false; }, 3000);
        },
        toggleMeal(pIdx, sIdx, mealCode) {
            const key = pIdx + '_' + sIdx;
            if (!this.selectedMeals[key]) this.selectedMeals[key] = [];
            const index = this.selectedMeals[key].indexOf(mealCode);
            if (index > -1) {
                this.selectedMeals[key].splice(index, 1);
            } else {
                this.selectedMeals[key].push(mealCode);
            }
        },
        calculateDuration(departTime, arrivalTime) {
            if (!departTime || !arrivalTime) return '-';

            const start = new Date(departTime);
            const end = new Date(arrivalTime);
            const diffMs = end - start; // selisih dalam milidetik

            const diffHrs = Math.floor(diffMs / 3600000);
            const diffMins = Math.round((diffMs % 3600000) / 60000);

            return `${diffHrs}j ${diffMins}m`;
        },
        generateCalendar() {
            const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
            const cal = [];
            const today = new Date();

            for (let i = 0; i < 12; i++) {
                let tempDate = new Date(today.getFullYear(), today.getMonth() + i, 1);
                let monthIdx = tempDate.getMonth();
                let year = tempDate.getFullYear();

                // Hitung jumlah hari dalam bulan tersebut
                let totalDays = new Date(year, monthIdx + 1, 0).getDate();

                // Buat Array [1, 2, 3, ... totalDays]
                let daysArray = [];
                for (let d = 1; d <= totalDays; d++) {
                    daysArray.push(d);
                }

                cal.push({
                    id: i,
                    name: months[monthIdx],
                    monthIndex: monthIdx,
                    year: year,
                    days: daysArray, // SEBELUMNYA HANYA ANGKA, SEKARANG ARRAY
                    startDay: (new Date(year, monthIdx, 1).getDay() + 6) % 7 // Penyesuaian awal hari Senin
                });
            }
            this.calendarData = cal;
        },
        openModal(modal, target) {
            // 1. Simpan target dengan nama variabel yang konsisten
            this.activeModalType = target;
            this.modalTarget = target; // Tetap simpan ini jika digunakan di modal rute

            // 2. Logika pembukaan modal
            if (modal === 'route') {
                this.showRouteModal = true;
                this.searchCity = '';
            } else if (modal === 'calendar') {
                this.showCalendar = true;
            } else if (modal === 'pax') {
                this.showPaxModal = true;
            }

            this.$nextTick(() => {
                if (typeof lucide !== 'undefined') {
                    lucide.createIcons();
                }
            });
        },
        selectDate(d, m, y) {
            // Format YYYY-MM-DD untuk sistem
            const formatted = `${y}-${String(m + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;

            // Format Label untuk tampilan
            const ms = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"];
            const label = `${d} ${ms[m]} ${y}`;

            // Gunakan variabel activeModalType yang diset dari openModal
            if (this.activeModalType === 'depart') {
                this.search.departDate = formatted;
                this.search.departDateLabel = label;
            } else if (this.activeModalType === 'return') {
                this.search.returnDate = formatted;
                this.search.returnDateLabel = label;
            }

            // Tutup Modal
            this.showCalendar = false;

            // Debugging: Cek apakah data sudah benar di console
            console.log("Update Success:", this.search);

            this.showToast("Tanggal dipilih: " + label);
        },
        isDateDisabled(d, m, y) {
            const cellDate = new Date(y, m, d);
            cellDate.setHours(0, 0, 0, 0);
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            return cellDate < today;
        },

        isSelected(d, m, y) {
            const formatted = `${y}-${String(m + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
            return this.activeModalType === 'depart'
                ? this.search.departDate === formatted
                : this.search.returnDate === formatted;
        },

        setTripType(type) {
            this.search.tripType = type;
            if (type === 'OneWay') { this.search.returnDate = ''; this.search.returnDateLabel = ''; }
            else if (type === 'RoundTrip' && !this.search.returnDate) { this.openModal('calendar', 'return'); }
        },
        setupPassengerForms() {
            this.passengers = [];
            for (let i = 0; i < this.paxCount.adult; i++) this.passengers.push({ title: 'MR', firstName: '', lastName: '', birthDate: '1995-01-01', gender: 'Male', IDNumber: '', selectedSeat: '', type: 0, typeLabel: 'Dewasa' });
            for (let i = 0; i < this.paxCount.child; i++) this.passengers.push({ title: 'MSTR', firstName: '', lastName: '', birthDate: '2015-01-01', gender: 'Male', IDNumber: '', selectedSeat: '', type: 1, typeLabel: 'Anak' });
            for (let i = 0; i < this.paxCount.infant; i++) this.passengers.push({ title: 'MSTR', firstName: '', lastName: '', birthDate: '2024-01-01', gender: 'Male', IDNumber: '', selectedSeat: '', type: 2, typeLabel: 'Bayi' });
        },
        goToSeats() {
            this.activeSeatSegment = 0;
            this.activePaxIndex = 0;

            // Perbaikan Path: Langsung ke seatAddOns dari respon API
            if (this.seatResult && this.seatResult.seatAddOns) {
                this.seatMap = this.seatResult.seatAddOns[0]?.infos || [];
            }

            this.step = 'seats';
            window.scrollTo(0, 0);
        },

        // Fungsi ganti rute Pergi/Pulang
        switchSeatSegment(sIdx) {
            this.activeSeatSegment = sIdx;
            if (this.seatResult && this.seatResult.seatAddOns) {
                // Ambil info kursi berdasarkan index rute (0 atau 1)
                this.seatMap = this.seatResult.seatAddOns[sIdx]?.infos || [];
            }
        },

        assignSeat(designator) {
            const p = this.passengers[this.activePaxIndex];

            // Pastikan properti selectedSeats ada
            if (!p.selectedSeats) {
                p.selectedSeats = {};
            }

            const isTaken = this.passengers.some((otherPax, idx) =>
                idx !== this.activePaxIndex &&
                otherPax.selectedSeats &&
                otherPax.selectedSeats[this.activeSeatSegment] === designator
            );

            if (isTaken) {
                this.showToast("Kursi sudah dipilih penumpang lain");
                return;
            }

            if (p.selectedSeats[this.activeSeatSegment] === designator) {
                delete p.selectedSeats[this.activeSeatSegment];
            } else {
                p.selectedSeats[this.activeSeatSegment] = designator;
            }

            // Trigger reaktivitas
            this.passengers = [...this.passengers];
        },

        switchSeatSegment(sIdx) {
            this.activeSeatSegment = sIdx;

            // Sesuaikan dengan variabel yang menampung hasil pencarian kursi (seatResult)
            if (this.seatResult && this.seatResult.seatAddOns) {
                // Ambil info kursi berdasarkan index rute sIdx (0 = pergi, 1 = pulang)
                this.seatMap = this.seatResult.seatAddOns[sIdx]?.infos || [];
            }
        },
        isSeatTaken(s) {
            const currentPax = this.passengers[this.activePaxIndex];
            // Cek apakah kursi 's' adalah kursi yang dipilih oleh penumpang aktif pada segmen yang aktif
            return currentPax.selectedSeats && currentPax.selectedSeats[this.activeSeatSegment] === s;
        },

        showToast(msg, type = 'info') { this.toast = { show: true, message: msg, type }; setTimeout(() => this.toast.show = false, 3500); },
        getClassName(code) {
            const classMap = {
                'C': 'Bisnis (Business)',
                'D': 'Bisnis Promo',
                'I': 'Bisnis Diskon',
                'Y': 'Ekonomi (Economy)',
                'M': 'Ekonomi',
                'S': 'Ekonomi Promo',
                'W': 'Ekonomi Promo',
                'V': 'Ekonomi Promo',
                'T': 'Ekonomi Promo',
                'X': 'Ekonomi Promo',
                'A': 'Ekonomi Premium'
            };
            return classMap[code?.toUpperCase()] || 'Kelas ' + code;
        },

        getAirlineName(code) {
            const airlines = {
                'ID': 'Batik Air',
                'JT': 'Lion Air',
                'QZ': 'Air Asia',
                'GA': 'Garuda Indonesia',
                'QG': 'Citilink',
                'XT': 'AirAsia Extra'
            };
            return airlines[code] || 'Maskapai';
        },
        totalPaxCount() { return parseInt(this.paxCount.adult) + parseInt(this.paxCount.child) + parseInt(this.paxCount.infant); },
        paxSummary() { return `${this.paxCount.adult} Dws, ${this.paxCount.child} Anak, ${this.paxCount.infant} Bayi`; },
        filteredAirports() {
            if (!this.searchCity) return this.airports;
            return this.airports.filter(p => p.city.toLowerCase().includes(this.searchCity.toLowerCase()) || p.code.toLowerCase().includes(this.searchCity.toLowerCase()));
        },


        swapRoute() {
            [this.search.origin, this.search.destination] = [this.search.destination, this.search.origin];
            [this.search.originName, this.search.destinationName] = [this.search.destinationName, this.search.originName];
        },

        openETicket() { this.step = 'e-ticket'; this.$nextTick(() => lucide.createIcons()); },


        async downloadTicket() {
            // 1. Validasi keberadaan kode booking
            if (!this.bookingResult || !this.bookingResult.bookingCode) {
                this.showToast("Kode booking tidak tersedia", "error");
                return;
            }

            const bCode = this.bookingResult.bookingCode;

            // Tampilkan state loading agar user tahu proses sedang berjalan
            this.loading = true;
            this.loadingText = "Sedang menyiapkan file PDF...";

            try {
                // 2. Fetch data sebagai Blob
                // Menggunakan fetch memberikan kontrol penuh atas header jika nanti diperlukan
                const response = await fetch(`https://darma.siappgo.id/api/flights/generate-ticket/${bCode}`, {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/pdf'
                    }
                });

                if (!response.ok) throw new Error('Gagal mengunduh tiket dari server');

                // 3. Konversi response menjadi Blob (Binary Large Object)
                const blob = await response.blob();

                // Cek jika yang dikembalikan bukan PDF (misal pesan error JSON)
                if (blob.type !== 'application/pdf') {
                    throw new Error('Server tidak mengirimkan file PDF');
                }

                // 4. Buat Object URL lokal
                const url = window.URL.createObjectURL(blob);

                // 5. Proses Unduhan Tanpa Pindah Halaman
                const link = document.createElement('a');
                link.href = url;
                link.download = `E-Tiket-${bCode}.pdf`; // Nama file saat disimpan

                // PENTING: Untuk Webview Android/iOS agar tetap di halaman yang sama
                link.style.display = 'none';
                document.body.appendChild(link);

                // Jalankan perintah klik
                link.click();

                // 6. Cleanup (Pembersihan)
                // Beri jeda sedikit sebelum dihapus agar browser sempat memproses
                setTimeout(() => {
                    document.body.removeChild(link);
                    window.URL.revokeObjectURL(url);
                }, 100);

                this.showToast("Tiket berhasil disimpan ke perangkat", "success");

            } catch (e) {
                console.error("Download Error:", e);
                this.showToast("Gagal unduh PDF: " + e.message, "error");
            } finally {
                this.loading = false;
            }
        }
    };
}