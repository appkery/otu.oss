/**
 * WatermelonDB 마이그레이션 파일
 *
 * 오픈소스 버전은 신규 설치 기준이므로 단일 마이그레이션으로 통합되어 있습니다.
 * 스키마 버전 1로 시작하여 모든 테이블을 한 번에 생성합니다.
 *
 * 마이그레이션 추가 방법:
 * 1. schema.ts의 version을 1 증가
 * 2. 이 파일의 migrations 배열에 새 마이그레이션 객체 추가
 *
 * @see https://watermelondb.dev/docs/Advanced/Migrations
 */
import { createTable, schemaMigrations } from '@nozbe/watermelondb/Schema/migrations';

export default schemaMigrations({
    migrations: [
        {
            // 최초 스키마: 모든 테이블 생성
            toVersion: 1,
            steps: [
                // page 테이블
                createTable({
                    name: 'page',
                    columns: [
                        { name: 'title', type: 'string', isOptional: true },
                        { name: 'body', type: 'string', isOptional: true },
                        { name: 'is_public', type: 'boolean', isOptional: true },
                        { name: 'child_count', type: 'number', isOptional: true },
                        { name: 'parent_count', type: 'number', isOptional: true },
                        { name: 'last_viewed_at', type: 'number', isOptional: true },
                        { name: 'img_url', type: 'string', isOptional: true },
                        { name: 'length', type: 'number', isOptional: true },
                        { name: 'created_at', type: 'number' },
                        { name: 'updated_at', type: 'number' },
                        { name: 'user_id', type: 'string' },
                        { name: 'type', type: 'string' },
                        { name: 'folder_id', type: 'string', isOptional: true },
                    ],
                }),
                // folder 테이블
                createTable({
                    name: 'folder',
                    columns: [
                        { name: 'name', type: 'string' },
                        { name: 'description', type: 'string', isOptional: true },
                        { name: 'thumbnail_url', type: 'string', isOptional: true },
                        { name: 'page_count', type: 'number', isOptional: true },
                        { name: 'created_at', type: 'number' },
                        { name: 'updated_at', type: 'number' },
                        { name: 'last_page_added_at', type: 'number', isOptional: true },
                        { name: 'user_id', type: 'string' },
                    ],
                }),
                // alarm 테이블
                createTable({
                    name: 'alarm',
                    columns: [
                        { name: 'user_id', type: 'string' },
                        { name: 'page_id', type: 'string' },
                        { name: 'next_alarm_time', type: 'number', isOptional: true },
                        { name: 'sent_count', type: 'number' },
                        { name: 'last_notification_id', type: 'string', isOptional: true },
                        { name: 'created_at', type: 'number' },
                        { name: 'updated_at', type: 'number' },
                    ],
                }),
            ],
        },
    ],
});
