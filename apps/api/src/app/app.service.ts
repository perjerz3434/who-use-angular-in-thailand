import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getData() {
    return ({
      'companies': [
        {
          'name': 'Humanize Co.,Ltd.',
          'description': 'Better Life by Simplified Innovation for Human',
          'logo': 'assets/companies/humanize.png',
          'companyUrl': 'https://humanize.co.th',
          'productUrls': ['https://nize.ai/nize-digitalthailand.html'],
          'technologies': ['angular', 'nestjs', 'ngrx', 'firebase', 'tensorflow', 'python'],
        },
        {
          'name': 'ActiMotive',
          'description': 'Experience the Fitware Revolution',
          'logo': 'assets/companies/actimotive.png',
          'companyUrl': 'http://www.acti-motive.com',
          'productUrls': ['http://www.acti-motive.com/product.html', 'https://actimotive.app'],
          'technologies': ['angular', 'electron', 'firebase', 'nodejs', 'pwa', 'rxjs', 'scss', 'typescript', 'webrtc'],
        },
        {
          'name': 'IT One',
          'description': 'IT company',
          'logo': 'assets/companies/itone.png',
          'companyUrl': 'https://www.itone.co.th',
          'productUrls': [],
          'technologies': ['angular', 'java'],
        },
        {
          'name': 'CalCal',
          'description': 'Lifestyle Calorie Management',
          'logo': 'assets/companies/calcal.png',
          'companyUrl': 'https://www.cal-cal.com',
          'productUrls': ['https://calcal-store-dev.firebaseapp.com'],
          'technologies': ['angular', 'firebase', 'gcp', 'android', 'ios'],
        },
        {
          'name': 'ASC',
          'description': 'Advanced Systems Consulting',
          'logo': 'assets/companies/asc.png',
          'companyUrl': 'http://www.grpasc.com/',
          'productUrls': [],
          'technologies': ['angular', 'java', 'neo4j'],
        },
        {
          'name': 'Youngcyber Digital Technology',
          'description': 'Develop Platform , Training , Consulte About Digital technology ',
          'logo': 'assets/companies/youngcyber.png',
          'companyUrl': 'http://www.youngcyber.co.th',
          'productUrls': [
            'https://www.jisaims.com/',
            'http://www.halaltourismthailand.com/mobile',
            'http://pufree.tech/',
            'https://halq.app/'
          ],
          'technologies': ['angularjs', 'angular', 'ionic', 'firebase', 'ios', 'android'],
        },
        {
          'name': 'incen Co.,Ltd.',
          'description': 'Create innovation for society engineers',
          'logo': '',
          'companyUrl': 'https://www.hostxdesign.com',
          'productUrls': [],
          'technologies': ['angular', 'firebase', 'nodejs'],
        },
        {
          'name': 'Allianz Technology',
          'description': 'Angular UI Library Base on Pattern LAB (Allianz StyleGuide)',
          'logo': 'assets/companies/allianz.svg',
          'companyUrl': 'https://www.allianz.com/en.html',
          'productUrls': ['https://api-test.allianz.com/ngx-ndbx-dev/'],
          'technologies': ['angular', 'scss', 'typescript'],
        },
        {
          'name': 'Vertice international ',
          'description': 'Take advantage of the human resources of Asian countries aimed IT',
          'logo': 'assets/companies/vertice.png',
          'companyUrl': 'http://www.vertice-international.com/company',
          'productUrls': ['https://kurumajiten.jp/login'],
          'technologies': ['angular', 'rxjs', 'ngrx', 'scss', 'typescript'],
        },
        {
          'name': 'Infinite',
          'description': 'Softwere and consult business solutions',
          'logo': 'assets/companies/Infinite-staffing.png',
          'companyUrl': 'https://infinite-staff.com',
          'productUrls': [''],
          'technologies': ['angular', 'nodejs', 'typescript', 'scss'],
        },
        {
          'name': 'K.Stone Corporation Ltd.',
          'description': 'K.Stone Corporation Ltd. offer world class recruitment and outsourcing services to promote your success',
          'logo': 'assets/companies/kstone.gif',
          'companyUrl': 'http://www.kstonecorp.co.th/',
          'productUrls': [],
          'technologies': ['angular', 'firebase', 'nodejs', 'typescript'],
        },
        {
          'name': 'Exzy',
          'description': 'Our Service, We help brands reach their audiences, throught remarkable experience.',
          'logo': 'assets/companies/exzy.png',
          'companyUrl': 'http://www.exzy.me/',
          'productUrls': ['https://exzymeeting.exzycloud.com', 'https://www.meetintouch.com'],
          'technologies': ['angularjs', 'angular', 'ngrx', 'jasmine-marbles', 'cordova', 'typescript', 'scss'],
        },
        {
          'name': 'BUILK ONE GROUP',
          'description': 'Digitizing C+RE industry in SEA to increase efficiency & mitigate risks.',
          'logo': 'assets/companies/builkone.png',
          'companyUrl': 'https://www.builk.one/',
          'productUrls': ['https://www.builk.com/en/'],
          'technologies': ['angular', 'scss', 'rxjs'],
        },
        {
          'name': 'ODDS Team',
          'description': 'We believe that, software development should be fun',
          'logo': 'assets/companies/odds.png',
          'companyUrl': 'https://web.facebook.com/oddsteam/',
          'productUrls': [],
          'technologies': ['angular', 'web', 'go', 'android', 'ios'],
        },
        {
          'name': 'Indistinct',
          'description': 'New Software House',
          'logo': '',
          'companyUrl': '',
          'productUrls': [],
          'technologies': ['angular', 'firebase', 'gcp', 'android', 'ios', 'ionic', 'hybrid'],
        },
        {
          'name': 'Quo Bangkok',
          'description': 'Quo Bangkok',
          'logo': '',
          'companyUrl': 'https://www.quo-global.com/',
          'productUrls': [],
          'technologies': ['angular'],
        },
        {
          'name': 'Krungsri Auto',
          'description': 'Krungsri Auto',
          'logo': 'assets/companies/krungsri-auto.png',
          'companyUrl': 'https://www.krungsriauto.com',
          'productUrls': [],
          'technologies': ['angularjs', 'localstorage', 'android', 'ios'],
        },
        {
          'name': 'InterSet Research and Solution',
          'description': 'IT company',
          'logo': 'assets/companies/interset.png',
          'companyUrl': 'https://interset.co.th/',
          'productUrls': ['https://interset.co.th/en/products-services/'],
          'technologies': ['angularjs', 'typescript', 'asp.net'],
        },
        {
          'name': 'iPassion Co., Ltd',
          'description': 'Building Integrated Technology Solutions AcrossMobile, Web & Cloud For Global Startups Companies',
          'logo': 'assets/companies/ipassion.png',
          'companyUrl': 'http://ipassion.co.th/',
          'productUrls': ['https://blockchain-a.firebaseapp.com/', 'http://rdserver.rd.go.th'],
          'technologies': ['angularjs', 'angular', 'ionic', 'nestjs', 'ngrx'],
        },
        {
          'name': 'ScoutOut',
          'description': 'Recruitment Software for Southeast Asia Workforce',
          'logo': 'assets/companies/scoutout.png',
          'companyUrl': 'https://www.scoutout.net',
          'productUrls': ['https://www.linejobs.me'],
          'technologies': ['angular', 'firebase', 'gcp', 'java', 'python'],
        },
        {
          'name': 'Aspiron Co.,Ltd.',
          'description': 'Aspiron is an IT solution provider specializing in Enterprise Solution',
          'logo': 'assets/companies/aspiron.svg',
          'companyUrl': 'https://aspiron.co.th',
          'productUrls': [],
          'technologies': ['angularjs', 'java'],
        },
      ],
    });
  }
}
