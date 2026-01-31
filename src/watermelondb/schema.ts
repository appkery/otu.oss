/**
 * WatermelonDB 스키마 정의
 *
 * 스키마 변경 방법:
 * 1. migrations.ts에 새 마이그레이션 정의
 * 2. 이 파일의 테이블 스키마 수정
 * 3. version을 1 증가
 *
 * @see https://watermelondb.dev/docs/Schema
 */
import { appSchema, tableSchema } from '@nozbe/watermelondb';

export const schema = appSchema({
    version: 1,
    tables: [
        tableSchema({
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
        tableSchema({
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
        tableSchema({
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
});
