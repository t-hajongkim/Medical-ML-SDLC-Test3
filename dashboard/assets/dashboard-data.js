window.DASHBOARD_DATA = {
  "dataset": {},
  "eda": {
    "assessment_status": "pending",
    "executed_ids": [],
    "results": [],
    "reused_ids": []
  },
  "evaluation_plan": {},
  "generated_at": "2026-10-17T08:45:14.476457+00:00",
  "local_smoke": null,
  "pipeline": {
    "issue_number": 7,
    "repository": "t-hajongkim/Medical-ML-SDLC-Test3",
    "source_run": "39018516658",
    "stage": "target",
    "status": "success"
  },
  "purpose": "GitHub Actions aggregate stage snapshot",
  "remote_model_evaluation": null,
  "remote_pr1": null,
  "remote_pr2": null,
  "schema": 1,
  "target": {
    "additional_requests": "EDA 결과와 데이터 제약을 근거로 평가 지표 추천 초안을 제시해 주세요.\r\n\r\n이번 요청은 빈 대시보드에서 Issue 접수, 실제 EDA와 평가계획, 고정 모델 추론·평가, draft PR2까지 자동으로 채워지는지 확인하는 교육용 검증입니다.\r\n고정 데이터·모델을 변경하거나 새 학습·재분할하지 마세요.\r\n실제 평가는 validation만 사용하며 test 분할은 실행하지 않습니다.\r\n임상 사용 승인이나 독립 holdout 성능으로 표현하지 마세요.\r\n대시보드 표시를 위한 별도 모델 실행이나 가상의 지표를 만들지 마세요.",
    "cohort_requirements": "제공된 train 71,236행, validation 15,265행, test 15,265행 전체를 점검합니다.\r\n기존 분할을 변경하거나 새로 나누지 않습니다.\r\n추가 포함·제외 조건은 없습니다.",
    "issue_number": 7,
    "issue_url": "https://github.com/t-hajongkim/Medical-ML-SDLC-Test3/issues/7",
    "prediction_time": null,
    "public_data_confirmation": true,
    "repository": "t-hajongkim/Medical-ML-SDLC-Test3",
    "research_goal": "당뇨병 입원 환자의 30일 이내 재입원 평가를 준비합니다.\r\n제공된 데이터의 분할·품질과 연령·성별·인종별 분포를 점검하고,\r\nEDA 결과를 근거로 평가 지표와 해석 시 주의사항을 검토합니다.",
    "research_question": "- 스키마·특성 순서·결측·비정상 수치가 준비 데이터 명세와 일치하는가?\r\n- train/validation/test 사이의 환자 중복은 어느 정도인가?\r\n- 연령·성별·인종별 표본 수와 재입원 정답 분포는 어떻게 다른가?\r\n- 원본 결측과 전처리 대치값을 구분해 해석할 수 있는가?",
    "schema_version": 1,
    "selection_execution": false,
    "title": "Dashboard integration: empty template to actual evaluation"
  }
}
;
