// middleware에서 embedding-schedules는 기본적으로 크론에서 동작하기 때문에 쿠키가 아니라, CRON_SECRET를 이용해서 인증된다.
// embedding-schedules가 user_id를 받아서 처리하는 기능도 수행하게 되면서 이 둘의 주소를 분리할 필요가 생겼다.
// 독립된 파일로 구현하면 되겠지만, 번거로워서 파일만 분리했다.
import { GET } from '../embedding-scheduler/route';
export {
    /* @next-codemod-ignore `GET` export is re-exported. Check if this component uses `params` or `searchParams`*/
    GET,
};
